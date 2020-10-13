import {useState} from 'react'
import PageContent from '../components/PageContent'
import Form from '../components/Form'
import Cards from '../components/Cards'
import Web3 from 'web3'
import { getTransactions, getEtherUSD } from '../services/etherscan.service'
import BigNumber from 'bignumber.js'

const ONE_DAY_TIME_STAMP = (new Date() / 1000) - (24 * 60 * 60)

export default function Home() {

  const [ address, setAddress ] = useState('')

  const [gasFees, setGasFees] = useState({
    total: 0,
    daily: 0,
    pizza: 0
  })
  
  const getGasFees = async (transactions, address) => {
    let totalGasFee = new BigNumber(0) // eth
    let dailyGasFee = new BigNumber(0)

    console.log('REMOVEME ===== ONE_DAY_TIME_STAMP', ONE_DAY_TIME_STAMP)

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

    console.log('dailyGasFee', dailyGasFee.toString())


    return {
      totalGasFee: '$' + totalGasFee.toFixed(3).toString(),
      dailyGasFee: '$' + dailyGasFee.toFixed(3).toString(),
      converToPizza: totalGasFee.dividedBy(new BigNumber(10)).toFixed(0).toString()
    }
  }

  const handleCountFees = async() => {
    if (!address) return 

    try {
      const web3 = new Web3(window.ethereum)
      const transactionCount = await web3.eth.getTransactionCount(address)
      const transactions = await getTransactions(address, transactionCount)

      const { totalGasFee, dailyGasFee, converToPizza } = await getGasFees(transactions, address)

      setGasFees({
        total: totalGasFee,
        daily: dailyGasFee,
        pizza: converToPizza
      })

    } catch (error) {
      console.error('ERROR count fees: ', error)
    }
  }

  return (
    <PageContent>
      <Form 
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onSubmit={handleCountFees}
      />
      <Cards 
        gasFees={gasFees}
      />
    </PageContent>
  )
}
