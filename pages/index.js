import {useState} from 'react'
import PageContent from '../components/PageContent'
import Form from '../components/Form'
import Cards from '../components/Cards'
import { getTransactions, getEtherUSD } from '../services/etherscan.service'
import BigNumber from 'bignumber.js'
import { validate }  from 'wallet-address-validator'
import { toast } from 'react-toastify'
import GasTracker from '../components/GasTracker'

const ONE_DAY_TIME_STAMP = (new Date() / 1000) - (24 * 60 * 60)

export default function Home() {

  const [ address, setAddress ] = useState('')

  const [gasFees, setGasFees] = useState({
    totalUSD: 0,
    totalETH: 0,
    dailyUSD: 0,
    dailyETH: 0,
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
      let totalGasFeeETH = new BigNumber(0)
      let totalGasFeeUSD = new BigNumber(0) 
      let dailyGasFeeETH = new BigNumber(0)
      let dailyGasFeeUSD = new BigNumber(0)

      for (const transaction of transactions) {
        if (transaction.from.toUpperCase() === address.toUpperCase()) {
          const gasPrice = new BigNumber(transaction.gasPrice).dividedBy(new BigNumber(10).pow(18))
          const gasUsed = new BigNumber(transaction.gasUsed)
          const transactionFee = gasPrice.multipliedBy(gasUsed)

          if (transaction.timeStamp > ONE_DAY_TIME_STAMP) {
            dailyGasFeeETH = dailyGasFeeETH.plus(transactionFee)
          }
          totalGasFeeETH = totalGasFeeETH.plus(transactionFee)
        }
      }

      const { ethusd } = await getEtherUSD()
      totalGasFeeUSD = totalGasFeeETH.multipliedBy(new BigNumber(ethusd))
      dailyGasFeeUSD = dailyGasFeeETH.multipliedBy(new BigNumber(ethusd))

      return {
        totalGasFeeUSD: totalGasFeeUSD.toFixed(3).toString(),
        totalGasFeeETH: totalGasFeeETH.toFixed(3).toString(),
        dailyGasFeeUSD: dailyGasFeeUSD.toFixed(3).toString(),
        dailyGasFeeETH: dailyGasFeeETH.toFixed(3).toString(),
        converToPizza: totalGasFeeUSD.dividedBy(new BigNumber(10)).toFixed(0).toString()
      }
    } catch (error) {
      toast.error(error.message)
      console.error('ERROR getGasFees: ', error)
    }
  }

  const handleCountFees = async() => {
    if (!address) return 
    setLoading(true)
    setGasFees({
      totalUSD: 0,
      totalETH: 0,
      dailyUSD: 0,
      dailyETH: 0,
      pizza: 0
    })

    try {
      const transactions = await handleGetTransactions(address, 1)

      const { totalGasFeeUSD, totalGasFeeETH, dailyGasFeeUSD, dailyGasFeeETH, converToPizza } = await getGasFees(transactions, address)
      setLoading(false)
      setGasFees({
        totalUSD: totalGasFeeUSD,
        totalETH: totalGasFeeETH,
        dailyUSD: dailyGasFeeUSD,
        dailyETH: dailyGasFeeETH,
        pizza: converToPizza
      })
    } catch (error) {
      toast.error(error.message)
      console.error('ERROR count fees: ', error)
      setLoading(false)
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

      <GasTracker />
    </PageContent>
  )
}
