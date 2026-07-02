// Listing data for the site.
//
// CMS-managed content lives in /content/*.json (edited via Sveltia CMS at /admin) and is
// imported below. The remaining datasets are kept inline here (not exposed in the CMS for v1).
// Image paths point at /images/** (served from public/images).

import homeData from "~~/content/home.json"
import aboutData from "~~/content/about.json"
import causesData from "~~/content/causes.json"
import newsData from "~~/content/news.json"
import galleryData from "~~/content/gallery.json"
import testimonialsData from "~~/content/testimonials.json"

export interface Slide {
  image: string
  subtitle: string
  title: string
  buttonLabel: string
  buttonUrl: string
}

export interface Counter {
  count: number
  text: string
}

export interface NewsItem {
  title: string
  author: string
  commentCount: string
  date: string
  thumbnail: string
  excerpt: string
  url: string
}

export interface EventItem {
  thumbnail: string
  title: string
  time: string
  date: string
  url: string
}

export interface CauseItem {
  thumbnail: string
  title: string
  category: string
  excerpt: string
  amount: { raised: string; goal: string }
  url: string
}

export interface SocialLink {
  icon: string
  url: string
}

export interface Volunteer {
  thumbnail: string
  title: string
  designation: string
  excerpt: string
  social: SocialLink[]
}

export interface GalleryItem {
  thumbnail: string
  title: string
  category: string
}

export interface GalleryTwoItem {
  title: string
  text: string
  image: string
}

export interface Sponsor {
  thumbnail: string
  url: string
}

export interface Testimonial {
  thumbnail: string
  excerpt: string
  name: string
  designation: string
}

export interface Feature {
  title: string
  text: string
  icon: string
  url?: string
  buttonLabel?: string
}

export interface CallToAction {
  floatedText: string
  title: string
  button: { label: string; url: string }
}

export interface BlogPost {
  title: string
  url: string
  date: string
  commentCount: number
  image: string
}

export interface BlogHome {
  sectionTitle: { title: string; subtitle: string }
  posts: BlogPost[]
}

export interface BudgetSegment {
  label: string
  value: number
  color: string
  icon: string
  description: string
}

export interface Budget {
  subtitle: string
  title: string
  text: string
  segments: BudgetSegment[]
}

export interface VideoBlock {
  subtitle: string
  title: string
  url: string
  poster: string
}

export interface Objective {
  icon: string
  title: string
  text: string
}

export interface Leader {
  name: string
  role: string
  phone: string
  email: string
  photo: string
}

export interface AboutContent {
  who: { subtitle: string; title: string; lead: string; body: string; image: string }
  objectives: { subtitle: string; title: string; items: Objective[] }
  leadership: { subtitle: string; title: string; members: Leader[] }
}

// --- CMS-managed (content/*.json) ---------------------------------------------

export const sliderOne: Slide[] = homeData.hero
export const budget: Budget = homeData.budget as Budget
export const homeVideo: VideoBlock = homeData.video as VideoBlock
export const about: AboutContent = aboutData as AboutContent
export const causes: CauseItem[] = causesData.items
export const news: NewsItem[] = newsData.items
export const gallery: GalleryItem[] = galleryData.items
export const testimonials: Testimonial[] = testimonialsData.items

// --- Inline (not in the CMS for v1) -------------------------------------------

export const sliderTwo: Slide[] = [
  { image: "/images/backgrounds/main-slider-1-1.jpg", subtitle: "Help is Our Goal", title: "Give them a <br> Helping Hand", buttonLabel: "Learn More", buttonUrl: "/about" },
  { image: "/images/backgrounds/main-slider-2-1.jpg", subtitle: "Help is Our Goal", title: "Give them a <br> Helping Hand", buttonLabel: "Learn More", buttonUrl: "/about" },
  { image: "/images/backgrounds/main-slider-2-2.jpg", subtitle: "Help is Our Goal", title: "Give them a <br> Helping Hand", buttonLabel: "Learn More", buttonUrl: "/about" },
]

export const sliderThree: Slide[] = [
  { image: "/images/backgrounds/main-slider-3-1.jpg", subtitle: "Helping Them Today", title: "Help the Poor <br> in Need", buttonLabel: "Learn More", buttonUrl: "/about" },
  { image: "/images/backgrounds/main-slider-3-2.png", subtitle: "Helping Them Today", title: "Help the Poor <br> in Need", buttonLabel: "Learn More", buttonUrl: "/about" },
]

export const sliderOneCounter: Counter[] = [
  { count: 4390, text: "Volunteers are Available" },
  { count: 8900, text: "Funds Raised by People" },
]

export const callToAction: CallToAction = {
  floatedText: "Become a Volunteers",
  title: "Join your hand with us for <br /> a better life and future",
  button: { label: "Learn More", url: "/contact" },
}

export const sponsors: Sponsor[] = Array.from({ length: 9 }, () => ({
  thumbnail: "/images/resources/brand-1-3.png",
  url: "#",
}))

export const features: Feature[] = [
  { title: "Clean Water", text: "Boreholes and safe water points so families no longer walk miles for healthy water.", icon: "icon-water", url: "/causes-details", buttonLabel: "Donate" },
  { title: "Education", text: "Books, uniforms and fees that keep vulnerable children learning and in school.", icon: "icon-fast-food", url: "/causes-details", buttonLabel: "Donate" },
  { title: "Healthcare", text: "Free medical outreaches bringing check-ups, medicines and maternal care to remote areas.", icon: "icon-health-check", url: "/causes-details", buttonLabel: "Donate" },
]

export const featuresTwo: Feature[] = [
  { title: "Become a Volunteer", text: "Give your time and skills to programmes that change lives.", icon: "icon-heart" },
  { title: "Quick Fundraise", text: "Rally your friends and community to raise funds for a cause.", icon: "icon-adoption" },
  { title: "Donate Now", text: "Every gift goes directly toward our health, education and water projects.", icon: "icon-donation-1" },
]

export const videoFeatures: Feature[] = [
  { title: "Become a Volunteer", text: "Join our volunteers delivering real impact in communities across Nigeria.", icon: "icon-charity" },
  { title: "Quick Fundraising", text: "Start a fundraiser and help us reach more families in need.", icon: "icon-generous" },
  { title: "Start Donating", text: "Support health, education, livelihood and clean-water projects today.", icon: "icon-fundraiser" },
]

export const galleryTwo: GalleryTwoItem[] = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((n) => ({
  title: "Child Education",
  text: "Charity",
  image: `/images/gallery/gallery-1-${n}.jpg`,
}))

export const blogHome: BlogHome = {
  sectionTitle: {
    title: "Latest news &amp; articles directly <br> coming from the blog",
    subtitle: "Get Daily Updates ",
  },
  posts: [
    { title: "Clean water reaches three rural communities", url: "/news-details", date: "20 Jan, 2026", commentCount: 2, image: "/images/blog/news-one-img-1.jpg" },
    { title: "Back-to-school drive supports vulnerable children", url: "/news-details", date: "20 Jan, 2026", commentCount: 2, image: "/images/blog/news-one-right-img-1.jpg" },
    { title: "Free medical outreach in underserved areas", url: "/news-details", date: "20 Jan, 2026", commentCount: 2, image: "/images/blog/news-one-right-img-2.jpg" },
    { title: "Skills training empowers women and youth", url: "/news-details", date: "20 Jan, 2026", commentCount: 2, image: "/images/blog/news-one-right-img-3.jpg" },
  ],
}

const content = {
  sliderOne, sliderTwo, sliderThree, sliderOneCounter, callToAction,
  news, causes, gallery, galleryTwo, sponsors,
  testimonials, features, featuresTwo, videoFeatures, blogHome,
}

export default content
