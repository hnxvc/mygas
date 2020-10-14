import {useState} from 'react'
import PageContent from '../components/PageContent'
import Form from '../components/Form'
import Cards from '../components/Cards'
import { getTransactions, getEtherUSD } from '../services/etherscan.service'
import BigNumber from 'bignumber.js'
import { validate }  from 'wallet-address-validator'
import { toast } from 'react-toastify';

const ONE_DAY_TIME_STAMP = (new Date() / 1000) - (24 * 60 * 60)

export default function Home() {

  const [ address, setAddress ] = useState('')

  const [gasFees, setGasFees] = useState({
    total: 0,
    daily: 0,
    pizza: 0
  })

  const [loading, setLoading] = useState(false)
  
  const handleGetTransactions = async (address, page) => {
    const transactions = await getTransactions(address, page)
    if (!transactions || transactions.length === 0) {
      return []
    }
    ++page
    return transactions.concat(await handleGetTransactions(address, page))
  }

  const getGasFees = async (transactions, address) => {
    try {
      let totalGasFee = new BigNumber(0) // eth
      let dailyGasFee = new BigNumber(0)
      for (const transaction of transactions) {
        if (transaction.from.toUpperCase() === address.toUpperCase()) {
          const gasPrice = new BigNumber(transaction.gasPrice).dividedBy(new BigNumber(10).pow(18))
          const gasUsed = new BigNumber(transaction.gasUsed)
          const transactionFee = gasPrice.multipliedBy(gasUsed)

          if (transaction.timeStamp > ONE_DAY_TIME_STAMP) {
            dailyGasFee = dailyGasFee.plus(transactionFee)
          }
          totalGasFee = totalGasFee.plus(transactionFee)
        }
      }

      const { ethusd } = await getEtherUSD()
      totalGasFee = totalGasFee.multipliedBy(new BigNumber(ethusd))
      return {
        totalGasFee: totalGasFee.toFixed(3).toString(),
        dailyGasFee: dailyGasFee.toFixed(3).toString(),
        converToPizza: totalGasFee.dividedBy(new BigNumber(10)).toFixed(0).toString()
      }
    } catch (error) {
      toast.error(error.message)
      console.error('ERROR getGasFees: ', error)
    }
  }

  const handleCountFees = async() => {
    if (!address) return 
    setLoading(true)

    try {
      const transactions = await handleGetTransactions(address, 1)

      const { totalGasFee, dailyGasFee, converToPizza } = await getGasFees(transactions, address)
      setLoading(false)
      setGasFees({
        total: totalGasFee,
        daily: dailyGasFee,
        pizza: converToPizza
      })
    } catch (error) {
      toast.error(error.message)
      console.error('ERROR count fees: ', error)
    }
  }

  const isAddressValid = validate(address, 'ethereum')

  return (
    <PageContent>
      <Form 
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onSubmit={handleCountFees}
        disabled={!isAddressValid}
        loading={loading}
      />
      <Cards 
        gasFees={gasFees}
      />
    </PageContent>
  )
}
