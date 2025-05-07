import React from 'react'

type StatCardProps = {
    title: string,
    description: string,
    icon: React.ReactNode
}

const Card = ({ title, description, icon }: StatCardProps) => {
  return (
    <div className="flex gap-3 items-start">
        <div className='mt-1 rounded-lg border border-black/10 p-1 flex-shrink-0'>
            {icon}
        </div>
        <div className=''>
            <h3 className='font-medium'>{title}</h3>
            <p className='text-sm text-zinc-500'>{description}
        </p>
        </div>
    </div>
  )
}

export default Card