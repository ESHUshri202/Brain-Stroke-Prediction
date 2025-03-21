import React from "react";
import { Clock, User, ArrowRight, Search, Stethoscope } from 'lucide-react';

const featuredPosts = [
  {
    id: 1,
    title: "Latest Breakthroughs in Cancer Research",
    excerpt:
      "Discover the revolutionary new treatments and methodologies that are changing the landscape of cancer therapy.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Oncology",
    imageUrl:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Understanding Mental Health in the Digital Age",
    excerpt:
      "How technology affects our mental well-being and strategies for maintaining psychological health.",
    author: "Dr. Michael Chen",
    date: "March 14, 2024",
    readTime: "6 min read",
    category: "Mental Health",
    imageUrl:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Preventive Healthcare: Your Guide to Wellness",
    excerpt: "Essential tips and practices for maintaining good health and preventing common diseases.",
    author: "Dr. Emily Roberts",
    date: "March 13, 2024",
    readTime: "5 min read",
    category: "Preventive Care",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Advances in Robotic Surgery Technology",
    excerpt: "Exploring the latest innovations in robotic-assisted surgical procedures and their impact on patient outcomes.",
    author: "Dr. James Wilson",
    date: "March 12, 2024",
    readTime: "7 min read",
    category: "Surgery",
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "The Future of Personalized Medicine",
    excerpt: "How genetic testing and AI are revolutionizing treatment plans and drug development.",
    author: "Dr. Lisa Anderson",
    date: "March 11, 2024",
    readTime: "9 min read",
    category: "Genetics",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Understanding Autoimmune Disorders",
    excerpt: "A comprehensive guide to autoimmune conditions and the latest treatment approaches.",
    author: "Dr. Rachel Kim",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Immunology",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    title: "Pediatric Nutrition Guidelines",
    excerpt: "Essential nutrition advice for children's health and development at different growth stages.",
    author: "Dr. David Martinez",
    date: "March 9, 2024",
    readTime: "5 min read",
    category: "Pediatrics",
    imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    title: "Heart Health: Latest Research",
    excerpt: "New findings in cardiovascular health and prevention strategies for heart disease.",
    author: "Dr. Jennifer Lee",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Cardiology",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    title: "Managing Chronic Pain",
    excerpt: "Modern approaches to chronic pain management and alternative therapy options.",
    author: "Dr. Robert Taylor",
    date: "March 7, 2024",
    readTime: "6 min read",
    category: "Pain Management",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    title: "Advances in Neuroscience",
    excerpt: "Recent discoveries in brain research and their implications for neurological treatments.",
    author: "Dr. Maria Garcia",
    date: "March 6, 2024",
    readTime: "8 min read",
    category: "Neurology",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    title: "Sports Medicine Breakthroughs",
    excerpt: "Latest developments in treating and preventing sports-related injuries.",
    author: "Dr. Thomas Brown",
    date: "March 5, 2024",
    readTime: "5 min read",
    category: "Sports Medicine",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 12,
    title: "Diabetes Management Today",
    excerpt: "Modern approaches to diabetes care and lifestyle modifications for better control.",
    author: "Dr. Susan White",
    date: "March 4, 2024",
    readTime: "7 min read",
    category: "Endocrinology",
    imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 13,
    title: "Respiratory Health Post-COVID",
    excerpt: "Understanding long-term respiratory health and recovery strategies after COVID-19.",
    author: "Dr. Alan Parker",
    date: "March 3, 2024",
    readTime: "6 min read",
    category: "Pulmonology",
    imageUrl: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 14,
    title: "Advances in Dental Care",
    excerpt: "New technologies and procedures revolutionizing modern dental treatment.",
    author: "Dr. Patricia Moore",
    date: "March 2, 2024",
    readTime: "5 min read",
    category: "Dentistry",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 15,
    title: "Understanding Allergies",
    excerpt: "Latest research in allergy prevention and treatment options for various allergic conditions.",
    author: "Dr. Kevin Zhang",
    date: "March 1, 2024",
    readTime: "6 min read",
    category: "Allergology",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 16,
    title: "Emergency Medicine Updates",
    excerpt: "Current best practices and innovations in emergency medical care.",
    author: "Dr. Amanda Foster",
    date: "February 29, 2024",
    readTime: "7 min read",
    category: "Emergency Medicine",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 17,
    title: "Dermatology Innovations",
    excerpt: "Breakthrough treatments and procedures in modern skin care and dermatology.",
    author: "Dr. Richard Lee",
    date: "February 28, 2024",
    readTime: "5 min read",
    category: "Dermatology",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 18,
    title: "Women's Health Advances",
    excerpt: "Latest developments and research in women's health and reproductive medicine.",
    author: "Dr. Michelle Wong",
    date: "February 27, 2024",
    readTime: "8 min read",
    category: "Gynecology",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
];
const Blog = () => {
  return (
    <>
      <div className="min-h-screen bg-none rounded-lg ">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
          <section>
            <h2 className="text-5xl font-semibold text-white mb-8 text-center">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {post.author}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <button className="flex items-center text-blue-600 hover:text-blue-800">
                        <span className="text-sm font-medium">Read more</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <div className="flex justify-center m-8">
          <span className="text-2xl bg-[#060429] rounded-lg p-4">Load More</span>
        </div>
        <p className="text-center">" Currently load more option is unavaible " </p>
      </div>
    </>
  );
};

export default Blog;
