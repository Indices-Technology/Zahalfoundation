// Listing datasets migrated from the original data.json.
// Brand/site/nav/contact now live in app/app.config.ts.
// Image paths point at /images/** (served from public/images).
// ZAHAL: replace copy and imagery below with real Zahal Foundation content.

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

const social: SocialLink[] = [
  { icon: "fab fa-twitter", url: "#" },
  { icon: "fab fa-facebook-square", url: "#" },
  { icon: "fab fa-dribbble", url: "#" },
  { icon: "fab fa-instagram", url: "#" },
]

export const sliderOne: Slide[] = [
  { image: "/images/backgrounds/main-slider-1-1.jpg", subtitle: "Helping Them Today", title: "Help the Poor <br> in Need", buttonLabel: "Learn More", buttonUrl: "/about" },
  { image: "/images/backgrounds/main-slider-2-1.jpg", subtitle: "Helping Them Today", title: "Help the Poor <br> in Need", buttonLabel: "Learn More", buttonUrl: "/about" },
  { image: "/images/backgrounds/main-slider-3-1.jpg", subtitle: "Helping Them Today", title: "Help the Poor <br> in Need", buttonLabel: "Learn More", buttonUrl: "/about" },
]

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

export const news: NewsItem[] = [
  { title: "Donation is Hope for Poor Childrens in", author: "Admin", commentCount: "2", date: "20 Jan, 2021", thumbnail: "/images/blog/news-page-img-1.jpg", excerpt: "There are many variations of but the majority have simply free text available not suffered.", url: "/news-details" },
  { title: "How Malnutrition Affect Children?", author: "Admin", commentCount: "2", date: "20 Jan, 2021", thumbnail: "/images/blog/news-page-img-2.jpg", excerpt: "There are many variations of but the majority have simply free text available not suffered.", url: "/news-details" },
  { title: "Capitalize on low hanging to identify", author: "Admin", commentCount: "2", date: "20 Jan, 2021", thumbnail: "/images/blog/news-page-img-3.jpg", excerpt: "There are many variations of but the majority have simply free text available not suffered.", url: "/news-details" },
  { title: "Override the digital divide with additional", author: "Admin", commentCount: "2", date: "20 Jan, 2021", thumbnail: "/images/blog/news-page-img-4.jpg", excerpt: "There are many variations of but the majority have simply free text available not suffered.", url: "/news-details" },
  { title: "Nanotechnology immersion along the", author: "Admin", commentCount: "2", date: "20 Jan, 2021", thumbnail: "/images/blog/news-page-img-5.jpg", excerpt: "There are many variations of but the majority have simply free text available not suffered.", url: "/news-details" },
  { title: "User generate in have multi time", author: "Admin", commentCount: "2", date: "20 Jan, 2021", thumbnail: "/images/blog/news-page-img-6.jpg", excerpt: "There are many variations of but the majority have simply free text available not suffered.", url: "/news-details" },
]

export const events: EventItem[] = [
  { thumbnail: "/images/resources/events-page-img-1.jpg", title: "Play for the world <br> with us", time: "8:00 pm", date: "20 <br> Jan", url: "/events-details" },
  { thumbnail: "/images/resources/events-page-img-2.jpg", title: "Mission for Fresh <br> &amp; Clean Water", time: "8:00 pm", date: "20 <br> Jan", url: "/events-details" },
  { thumbnail: "/images/resources/events-page-img-3.jpg", title: "Education for <br> poor children", time: "8:00 pm", date: "20 <br> Jan", url: "/events-details" },
  { thumbnail: "/images/resources/events-page-img-4.jpg", title: "Rights for <br> street childrens", time: "8:00 pm", date: "20 <br> Jan", url: "/events-details" },
  { thumbnail: "/images/resources/events-page-img-5.jpg", title: "Help for <br> needy people", time: "8:00 pm", date: "20 <br> Jan", url: "/events-details" },
  { thumbnail: "/images/resources/events-page-img-6.jpg", title: "Donation day <br> for people", time: "8:00 pm", date: "20 <br> Jan", url: "/events-details" },
]

export const causes: CauseItem[] = [
  { thumbnail: "/images/resources/causes-page-img-1.jpg", title: "Raise Fund for Clean & Healthy Water", category: "Medical", excerpt: "There are not many of passages of lorem ipsum avail isn alteration donationa in form simply free.", amount: { raised: "21,270", goal: "30,000" }, url: "/causes-details" },
  { thumbnail: "/images/resources/causes-page-img-2.jpg", title: "Our donation is hope for poor childrens", category: "Medical", excerpt: "There are not many of passages of lorem ipsum avail isn alteration donationa in form simply free.", amount: { raised: "15,270", goal: "30,000" }, url: "/causes-details" },
  { thumbnail: "/images/resources/causes-page-img-3.jpg", title: "Education for Poor Children", category: "Medical", excerpt: "There are not many of passages of lorem ipsum avail isn alteration donationa in form simply free.", amount: { raised: "11,270", goal: "30,000" }, url: "/causes-details" },
  { thumbnail: "/images/resources/causes-page-img-4.jpg", title: "Promoting The Rights of Children", category: "Medical", excerpt: "There are not many of passages of lorem ipsum avail isn alteration donationa in form simply free.", amount: { raised: "19,270", goal: "30,000" }, url: "/causes-details" },
  { thumbnail: "/images/resources/causes-page-img-5.jpg", title: "Fundrising for Early Childhood Rise", category: "Medical", excerpt: "There are not many of passages of lorem ipsum avail isn alteration donationa in form simply free.", amount: { raised: "22,270", goal: "30,000" }, url: "/causes-details" },
  { thumbnail: "/images/resources/causes-page-img-6.jpg", title: "School Counseling for Children", category: "Medical", excerpt: "There are not many of passages of lorem ipsum avail isn alteration donationa in form simply free.", amount: { raised: "23,270", goal: "30,000" }, url: "/causes-details" },
]

export const volunteers: Volunteer[] = [
  { thumbnail: "/images/team/team-page-img-1.jpg", title: "Janne", designation: "Volunteer", excerpt: "There are many of lorem ipsum available but the have in some form.", social },
  { thumbnail: "/images/team/team-page-img-2.jpg", title: "David", designation: "Volunteer", excerpt: "There are many of lorem ipsum available but the have in some form.", social },
  { thumbnail: "/images/team/team-page-img-3.jpg", title: "Sarah", designation: "Volunteer", excerpt: "There are many of lorem ipsum available but the have in some form.", social },
  { thumbnail: "/images/team/team-page-img-4.jpg", title: "Albert", designation: "Volunteer", excerpt: "There are many of lorem ipsum available but the have in some form.", social },
  { thumbnail: "/images/team/team-page-img-5.jpg", title: "Hallen", designation: "Volunteer", excerpt: "There are many of lorem ipsum available but the have in some form.", social },
  { thumbnail: "/images/team/team-page-img-6.jpg", title: "Pitter", designation: "Volunteer", excerpt: "There are many of lorem ipsum available but the have in some form.", social },
]

export const gallery: GalleryItem[] = [
  { thumbnail: "/images/gallery/gallery-page-img-1.jpg", title: "Child Education", category: "Charity" },
  { thumbnail: "/images/gallery/gallery-page-img-2.jpg", title: "Child Education", category: "Charity" },
  { thumbnail: "/images/gallery/gallery-page-img-3.jpg", title: "Child Education", category: "Charity" },
  { thumbnail: "/images/gallery/gallery-page-img-4.jpg", title: "Child Education", category: "Charity" },
  { thumbnail: "/images/gallery/gallery-page-img-5.jpg", title: "Child Education", category: "Charity" },
  { thumbnail: "/images/gallery/gallery-page-img-6.jpg", title: "Child Education", category: "Charity" },
  { thumbnail: "/images/gallery/gallery-page-img-7.jpg", title: "Child Education", category: "Charity" },
  { thumbnail: "/images/gallery/gallery-page-img-8.jpg", title: "Child Education", category: "Charity" },
  { thumbnail: "/images/gallery/gallery-page-img-9.jpg", title: "Child Education", category: "Charity" },
]

export const sponsors: Sponsor[] = Array.from({ length: 9 }, () => ({
  thumbnail: "/images/resources/brand-1-3.png",
  url: "#",
}))

export const testimonials: Testimonial[] = [
  { thumbnail: "/images/testimonial/testimonial-2-img-2.png", excerpt: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", name: "Jessica Brown", designation: "Volunteer" },
  { thumbnail: "/images/testimonial/testimonial-2-img-1.png", excerpt: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", name: "Kevin Martin", designation: "Volunteer" },
  { thumbnail: "/images/testimonial/testimonial-2-img-3.png", excerpt: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", name: "Mike Hardson", designation: "Volunteer" },
]

export const features: Feature[] = [
  { title: "Healthy Food", text: "Lorem ipsum is simply free text available amet, consectetuer adipiscing elit. There are not many passages of ipsum.", icon: "icon-fast-food", url: "/causes-details", buttonLabel: "Donate" },
  { title: "Clean Water", text: "Lorem ipsum is simply free text available amet, consectetuer adipiscing elit. There are not many passages of ipsum.", icon: "icon-water", url: "/causes-details", buttonLabel: "Donate" },
  { title: "Medical Treatment", text: "Lorem ipsum is simply free text available amet, consectetuer adipiscing elit. There are not many passages of ipsum.", icon: "icon-health-check", url: "/causes-details", buttonLabel: "Donate" },
]

export const featuresTwo: Feature[] = [
  { title: "Become a Volunteer", text: "Lorem ium dolor sit ametad pisicing elit sed do ut.", icon: "icon-heart" },
  { title: "Quick Fundraise", text: "Lorem ium dolor sit ametad pisicing elit sed do ut.", icon: "icon-adoption" },
  { title: "Donate Now", text: "Lorem ium dolor sit ametad pisicing elit sed do ut.", icon: "icon-donation-1" },
]

export const videoFeatures: Feature[] = [
  { title: "Become a Volunteer", text: "There are many variations of but the majority have simply free text suffered.", icon: "icon-charity" },
  { title: "Quick Fundraising", text: "There are many variations of but the majority have simply free text suffered.", icon: "icon-generous" },
  { title: "Start Donating", text: "There are many variations of but the majority have simply free text suffered.", icon: "icon-fundraiser" },
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
    { title: "Donation is Hope for Poor Childrens in Africa", url: "/news-details", date: "20 Jan, 2021", commentCount: 2, image: "/images/blog/news-one-img-1.jpg" },
    { title: "How Does Malnutrition Affect Children?", url: "/news-details", date: "20 Jan, 2021", commentCount: 2, image: "/images/blog/news-one-right-img-1.jpg" },
    { title: "Capitalize on low hanging fruit to identify", url: "/news-details", date: "20 Jan, 2021", commentCount: 2, image: "/images/blog/news-one-right-img-2.jpg" },
    { title: "Override the digital divide with additional", url: "/news-details", date: "20 Jan, 2021", commentCount: 2, image: "/images/blog/news-one-right-img-3.jpg" },
  ],
}

const content = {
  sliderOne, sliderTwo, sliderThree, sliderOneCounter, callToAction,
  news, events, causes, volunteers, gallery, galleryTwo, sponsors,
  testimonials, features, featuresTwo, videoFeatures, blogHome,
}

export default content
