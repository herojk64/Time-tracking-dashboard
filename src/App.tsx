import './App.scss'
import Card from './components/Card';
import Loading from './components/Loading';
import MenuCard from './components/MenuCard'
import { TimeStampProvider } from './context/TimeStampContext';
import { useTimeData } from './lib/helpers'


function App() {

  const { loading, error, data } = useTimeData();

  return (
    <div className='App'>
      <TimeStampProvider>
      {loading && <Loading />}
      {error && <div className='text-white text-center'>Something went wrong.</div>}
      {(!loading && !error) && (
        <main className=''>
          <MenuCard />
          {
            data && data?.map((dat,index)=>(
              <Card data={dat} key={index} />
            ))
          }
        </main>
      )}
      </TimeStampProvider>
    </div>
  )
}

export default App
