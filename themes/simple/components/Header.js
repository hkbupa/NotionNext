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
    <header className='text-center justify-between items-center px-6 bg-white h-80 dark:bg-black relative z-10 mb-10'>
      <div className='float-none inline-block py-12'>
        <Link href='/'>
          {/* 可使用一张单图作为logo */}
          <div className='flex space-x-6 justify-center'>
            <div className='hover:rotate-0 hover:scale-110 transform duration-200 cursor-pointer justify-center items-center flex'>
              <LazyImage
                priority={true}
                src={siteInfo?.icon}
                className='square'
                width={150}
                height={150}
                alt={siteConfig('AUTHOR')}
              />
            </div>

            <div className='flex-col flex justify-center'>
              <div className='text-xl font-medium dark:text-white py-1 hover:scale-105 transform duration-200 text-left'>
                香港浸會大學研究生會<br/>Postgraduate Association HKBU
              </div>
              <div
                className='text-sm font-light dark:text-white py-1 hover:scale-105 transform duration-200 text-left'
                dangerouslySetInnerHTML={{
                  __html: siteConfig('SIMPLE_LOGO_DESCRIPTION', null, CONFIG)
                }}
              />
            </div>
          </div>
        </Link>

        <div className='flex justify-center'>
          <SocialButton />
        </div>
      </div>
    </header>
  )
}
