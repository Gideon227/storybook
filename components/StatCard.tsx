import React from 'react'
import Card from './Card'
import { LiaUserSecretSolid } from 'react-icons/lia'
import { IoIosLogIn } from 'react-icons/io'
import { VscGithubAlt } from 'react-icons/vsc'

const StatCard = () => {
  return (
    <div className="flex justify-center items-center my-10 mx-2">
      <div className="rounded-xl border border-[#e5e7eb] bg-white text-[#08080A] shadow overflow-hidden w-full max-w-5xl">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-6 lg:p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-500">Status Card For Tracking</p>
                <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
                  Private app for safe tracking random things online
                </h1>
              </div>
              <div className="space-y-5 mb-8 pr-8">
                <Card
                  title="Lorem ipsum dolor"
                  icon={<LiaUserSecretSolid size={18} />}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                />
                <Card
                  title="No Perspiciatis"
                  icon={<IoIosLogIn size={18} />}
                  description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..."
                />
                <Card
                  title="Open-source code"
                  icon={<VscGithubAlt size={18} />}
                  description="We are fully open-source on Github. You can feel free to fork the repo and self-deploy or make customized changes."
                />
                <Card
                  title="Officia deserunt mollitia"
                  icon={<LiaUserSecretSolid size={18} />}
                  description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti..."
                />
              </div>
            </div>
          </div>

          {/* Optional visual right panel */}
          <div className="flex-1 bg-zinc-100 min-h-[300px] lg:min-h-0 hidden lg:block" />
        </div>
      </div>
    </div>
  )
}

export default StatCard
