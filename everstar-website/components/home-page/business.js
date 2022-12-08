import { useRouter } from 'next/router'
import { businessHomeData } from '../../data/constant'
import classes from './business.module.css'
import { useState, useRef, useEffect } from 'react'
export default function HomeBusiness() {
  const router = useRouter()
  // const [feature, setFeature] = useState({})
  const [value, setValue] = useState(0)
  const [isResize, setIsResize] = useState(false)
  const itemHeader = useRef()
  const arrowEl = useRef()
  const { locale } = router
  const datas = businessHomeData[locale]
  const features = datas[value].feature

  useEffect(() => {
    window.addEventListener('resize', () => setIsResize(true))
    const itemWidth = itemHeader.current.offsetWidth
    arrowEl.current.style.transform = `translateX(${itemWidth * value}px)`
  }, [value, isResize])

  return (
    <section>
      <div className='section-center'>
        <div className={classes.header}>
          <ul className='flex-item'>
            {datas.map((data, index) => {
              return (
                <li className={classes.item} key={index} ref={itemHeader}>
                  <div
                    className={`flex-column ${
                      data.id - 1 === value ? 'active-item' : ''
                    }`}
                    onClick={() => setValue(index)}
                  >
                    <div className=''>{data.icon}</div>
                    <h2 className={classes.title}>{data.title}</h2>
                  </div>
                  {index === 0 ? (
                    <div className={classes.arrow} ref={arrowEl}></div>
                  ) : (
                    ''
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          {features.map((feature, index) => {
            return (
              <div key={index}>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
