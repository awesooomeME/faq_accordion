import Faq_div from "@/components/faq_div";
import Image from "next/image";

import bg_mobile from "../public/background-pattern-mobile.svg"
import bg_desktop from "../public/background-pattern-desktop.svg"

export default function Home() {
  const FAQS = [["What is Frontend Menotr, and how will it help me?", 
                "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building"],
                ["Is Frontend Mentor free? ",
                "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."],
                ["Can I use Frontend Mentor projects in my portfolio?",
                "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"],
                ["How can I get help if I'm stuck on a Frontend Mentor challenge?", 
                "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."]
                ]

  return (
    <main className="min-h-screen bg-light_pink grid place-content-center p-4 relative">
      <div className="absolute top-0 left-0 min-h-44 h-80 w-full
      bg-no-repeat bg-cover sm:bg-desktop bg-mobile"
      >
      </div>
      <article className="bg-white p-4 rounded-xl shadow-sm z-50 grid gap-5">
        <section className="flex items-center gap-6">
          <div>
            <Image className="w-8 h-8" src="/icon-star.svg" width={40} height={40} alt=""/>
          </div>
          <h1 className="font-extra_heavy text-3xl">
            FAQs
          </h1>
        </section>
        <section className="grid gap-7">
          {FAQS.map((faq, i) => {
            return (
              <Faq_div question={faq[0]} answer={faq[1]} key={i} index={i}/>
            )
          })}
        </section>
      </article>
    </main>
  )
}
