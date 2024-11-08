import { Activity } from '../lib/interface'
import DotIcon from "../assets/images/icon-ellipsis.svg"
import workIcon from '../assets/images/icon-work.svg';
import playIcon from '../assets/images/icon-play.svg'
import studyIcon from '../assets/images/icon-study.svg'
import exerciseIcon from '../assets/images/icon-exercise.svg'
import socialIcon from '../assets/images/icon-social.svg'
import selfCareIcon from '../assets/images/icon-self-care.svg'
import './Card.scss'
import { useContext } from 'react'
import { TimeStampContext } from '../context/TimeStampContext'

interface PropsInteraface {
  data: Activity
}

type IconKey = 'work' | 'play' | 'study' | 'exercise' | 'social' | 'self_care';

const imageData: Record<IconKey, string> = {
  work: workIcon,
  play: playIcon,
  study: studyIcon,
  exercise: exerciseIcon,
  social: socialIcon,
  self_care: selfCareIcon
}


const Card = ({ data }: PropsInteraface) => {

  const { type } = useContext(TimeStampContext)
  const formattedTitle = data.title.toLowerCase().replace(/\s+/g, '_') as IconKey;
  const backIcon = imageData[formattedTitle];

  return (
    <section className='card' data-id={data.title}>
      <div className='card__backside__design'>
        <img src={backIcon} />
      </div>
      <div className='card__content__wrapper'>
        <div className='menu__section'>
          <h1>{data.title}</h1>
          <img src={DotIcon} />
        </div>
        <div className='timeframe__data__wrapper'>

          <h2>
            {
              data.timeframes[type].current
            }
            hrs
          </h2>
          <p className='last__week__data'>Last Week - {data.timeframes[type].previous}hrs</p>
        </div>
      </div>
    </section>
  )
}

export default Card