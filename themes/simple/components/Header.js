import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'
import SocialButton from './SocialButton'

/**
 * 网站顶部
 * @returns
 */
export default function Header(props) {
  const { siteInfo } = props

  return (
    <header className='text-center justify-between items-center px-6 bg-white h-60 dark:bg-black relative z-10'>
      <div className='float-none inline-block py-12'>
        <Link href='/'>
          {/* 可使用一张单图作为logo */}
          <div className='float-none flex space-x-6 justify-center'>
            <div className='float-none hover:scale-110 transform duration-200 cursor-pointer justify-center items-center flex'>
              <LazyImage
                priority={true}
                src={siteInfo?.icon}
                className='square'
                width={120}
                height={120}
                alt={siteConfig('AUTHOR')}
              />
            </div>

            <div className='float-none flex-col flex justify-center'>
              <div className='float-none text-xl font-medium dark:text-white py-1 hover:scale-105 transform duration-200 text-left'>
                香港浸會大學研究生會<br/>Postgraduate Association HKBU
              </div>
              <div
                className='float-none text-sm font-light dark:text-white py-1 hover:scale-105 transform duration-200 text-left'
                dangerouslySetInnerHTML={{
                  __html: siteConfig('SIMPLE_LOGO_DESCRIPTION', null, CONFIG)
                }}
              />
            </div>
          </div>
        </Link>


      </div>
    </header>
  )
}
