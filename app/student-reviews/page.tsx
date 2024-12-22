'use client'

import { Card, CardContent } from '@/app/components/ui/card'
import { Star, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PageWrapper } from '@/app/components/PageWrapper'

type Review = {
  name: string;
  rating: number;
  content: string;
}

const reviews: Review[] = [
  {
    name: "Carla",
    rating: 5,
    content: "It is because of your patience, support, encouragement, and simply extraordinary mentorship that helped me believe in myself to conquer this enormous task. Dr. Dwight, words cannot express how you have saved me. It is bittersweet, but I know I will treasure all of you and the long, arduous journey that is PhD, although this time, with a smile on my face and a glass of wine on hand when the kids are asleep."
  },
  {
    name: "Ra Jendra",
    rating: 5,
    content: "OMG Dr. Ryan Dwight – it brings tears to my eyes as I type this because you have shown so much compassion, provided excellent feedback - even if those comments made me want to beat my head up against the wall at times. However, I just adjusted, digested and corrected the areas as needed to keep it moving."
  },
  {
    name: "Jaila",
    rating: 5,
    content: "Dr. Dwight, Thank you for those tough comments as they were not literally holding my hand(s), but they were provided in order for me to dig deeper inside of me and pull out the facts (as well as researching them through supporting documents, etc.- Lol). Thank you for also being a cheerleader on the sidelines while saying if you want it – Go get it. #PRESS!!!"
  },
  {
    name: "Chad",
    rating: 5,
    content: "Dr. Dwight has proven to be the best dissertation instructor I have had since starting the process. The research experience and knowledge that Dr. Dwight encompasses has been instrumental in increasing my knowledge of PhD research and the requirement to complete my dissertation. I have learned so much about statistical analysis through directed learning method of Dr. Dwight. I truly am grateful for his dedication, knowledge, and desire to help me and this project get better."
  },
  {
    name: "David",
    rating: 5,
    content: "Dr. Dwight has been the best and most thorough professor that I have ever had. His feedback to my assignments was thoughtful, constructive and insightful. I could tell immediately that he had placed time into my assignments and had really read my material with an intent to understand my point of view. His constructive feedback allowed me to reach my goals and be prepared for the oral defense presentation."
  },
  {
    name: "Leena",
    rating: 5,
    content: "Thank you for your tremendous support, you are so patient and kind and keep me focused – and all your feedback will stay with me always. It's such a blessing to have you as my chair – you bring out the best in me and allow me to stand on your shoulders (metaphorically)!"
  },
  {
    name: "Dayn",
    rating: 5,
    content: "This course, and your instruction, were of inestimable value to me. To succeed, I was forced to overcome my self-doubt about my ability to select an appropriate topic, adequately derive a research question, and design a viable study. However, I persevered per your guidance and encouragement. Your guidance provided me a step-by-step instruction to create, present and defend a study prospectus. Thus, \"by the numbers,\" I was able to sequentially and progressively overcome my doubts about the process and my ability to adhere to it. Your encouragement was specific to my topic, my data and my temperament. This helped me to gain faith in my scholarship from both an empirical and personal manner. Thus, you prepared me for success in this course. Thank you again, Dr. Dwight, for your excellent instruction."
  }
]

const fadeInOut = `
  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(10px); }
    10%, 90% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-10px); }
  }
`;

const fadeClass = "animate-[fadeInOut_8s_ease-in-out]";

function RandomQuote({ reviews }: { reviews: Review[] }) {
  const [quote, setQuote] = useState(reviews[0])
  const [key, setKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * reviews.length)
      const newQuote = reviews[newIndex]
      if (newQuote !== quote) {
        setQuote(newQuote)
        setKey(prev => prev + 1)
      }
    }, 8000) // Match this with animation duration

    return () => clearInterval(interval)
  }, [reviews, quote])

  return (
    <div className="page-section bg-gradient-to-br from-background to-muted p-6 rounded-lg mb-8">
      <style>{fadeInOut}</style>
      <div key={key} className={`${fadeClass} content-text italic text-center`}>
        "{quote.content.split(' ').slice(0, 30).join(' ')}..."
        <div className="mt-2 font-semibold text-right text-primary">- {quote.name}</div>
      </div>
    </div>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-primary fill-primary' : 'text-muted-foreground'}`}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <PageWrapper>
      <div className="space-y-12 max-w-4xl mx-auto px-4 py-12">
        <h1 className="page-title">Student Reviews</h1>

        <RandomQuote reviews={reviews} />

        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="page-section">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-muted rounded-full p-2 mr-3">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="section-title text-xl">{review.name}</h3>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="content-text italic">"{review.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}