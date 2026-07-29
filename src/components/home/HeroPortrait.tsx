import Image from 'next/image'

export default function HeroPortrait() {
  return (
    <div
      className='
        relative
        mx-auto
        w-full
        max-w-60
        sm:max-w-70
        md:max-w-[320px]
        xl:max-w-90
      '
    >
      {/* Ambient glow */}
      <div
        className='
          absolute
          inset-4
          rounded-3xl
          bg-atlas-accent
          opacity-15
          blur-3xl
        '
      />

      {/* Portrait */}
      <div
        className='
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-atlas-surface
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        '
      >
        <Image
          src='/images/profile.png'
          alt='Portrait of Nickolas Berra'
          width={500}
          height={650}
          priority
          className='
            h-auto
            w-full
            object-cover
          '
        />
      </div>
    </div>
  )
}
