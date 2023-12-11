import SectionInitial from '@/components/home/section-initial'
import SectionProjects from '@/components/home/section-projects/section-projects'
import SectionQuality from '@/components/home/section-quality/section-quality'

export default function Home() {
  return (
    <main className="my-8 flex flex-col gap-8">
      <SectionInitial />
      <SectionQuality />
      <SectionProjects />
    </main>
  )
}
