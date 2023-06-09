import type { NextPage, GetStaticProps, GetServerSideProps } from 'next'
import type { Course, Lesson, Video } from "@prisma/client"
import { prisma } from 'utils/prisma'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import Heading from 'components/Heading'
import CourseGrid from 'components/CourseGrid'

type HomePageProps = {
  courses: (Course & {
    lessons: (Lesson & {
      video: Video | null;
    })[];
  })[]
}

const Home: NextPage<HomePageProps> = ({ courses }) => {
  return (
    <>
      {courses.length > 0 ? (<Heading>View Our Video Collection </Heading>) : (<Heading>There are no videos to view</Heading>)}
      {courses.find(course => course.published === false) && (
        <Heading as="h4">Draft movies are only visible to you alone</Heading>
      )}
      <CourseGrid courses={courses} />
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)

  const courses = await prisma.course.findMany({
    where: {
      OR: [
        {
          published: true
        },
        {
          author: {
            id: session?.user?.id
          }
        },
      ],
    },
    include: { lessons: { include: { video: true } } }
  })

  return {
    props: {
      courses
    },
  }
}