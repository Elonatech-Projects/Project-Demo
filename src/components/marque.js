"use client"
import Image from 'next/image'
import styles from './marquee.module.css'

export default function Marque({ images = [], durationSeconds = 10, height = 80 }) {
  // Duplicate images so the animation appears continuous
  const imgs = images && images.length ? images : [
    '/images/primerose.png',
    '/images/redeemers.png',
    '/images/sph-logo.png',
    '/images/cgrp.png',
    '/images/cefor.png',
  ];
  const doubled = [...imgs, ...imgs];

  return (
    <section className='py-4 bg-white max-h-1/3'>
      <div className=''>
        <div className="flex flex-col items-center text-black py-4">
                <h2 className="font-medium text-[40px]">Our Top Clients</h2>
                <p className="text-center text-sm font-normal">Meet our happy clients</p>
        </div>
        <div className={styles.marquee} style={{ ['--duration']: `${durationSeconds}s` }}>
          <div className={styles.inner}>
            {doubled.map((src, i) => (
              <div key={i} className={styles.item} style={{ height }}>
                <Image src={src} alt={`logo-${i}`} width={height * 2} height={height} style={{ objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
