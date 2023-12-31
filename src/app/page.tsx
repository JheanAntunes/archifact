import SectionConsult from '@/components/home/section-consult/section-consult'
import SectionDiscoverOurDesign from '@/components/home/section-discover-design/section-discover-our-design'
import SectionExpertise from '@/components/home/section-expertise/section-expertise'
import SectionInitial from '@/components/home/section-initial'
import SectionInternationallyImplemented from '@/components/home/section-internationally-implemented/section-internationally-implemented'
import SectionMeetOurTeam from '@/components/home/section-meet-our-team/section-meet-our-team'
import SectionOurClientsSaying from '@/components/home/section-our-clients-saying/section-our-clients-saying'
import SectionProjects from '@/components/home/section-projects/section-projects'
import SectionQuality from '@/components/home/section-quality/section-quality'

export default function Home() {
  return (
    <main className="my-8 flex flex-col gap-8">
      <SectionInitial />
      <SectionQuality />
      <SectionProjects />
      <SectionExpertise />
      <SectionInternationallyImplemented />
      <SectionMeetOurTeam />
      <SectionOurClientsSaying />
      <SectionDiscoverOurDesign />
      <SectionConsult />
    </main>
  )
}
