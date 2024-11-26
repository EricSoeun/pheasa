"use client";

import { courses } from "@/db/schema";
import Card from "./card";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
};

export default function List(props: Props) {
  return (
    <div className="grid  grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {props.courses.map((course) => (
        <Card
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          active={props.activeCourseId === course.id}
          key={course.id}
          onClick={(id) => {
            props.activeCourseId = id;
          }}
          disabled={false}
        />
      ))}
    </div>
  );
}
