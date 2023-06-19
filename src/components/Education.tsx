import HorizontalTimeline from "./HorizontalTimeline";

const Education = () => {
  const events = [
    {
      date: "July 2021 - February 2022",
      title: "Moringa School",
      description: "Software Engineering Certificate",
    },
    {
      date: "May 2017 - December 2021",
      title: "Kabarak University",
      description: "Bachelor in Information Technology",
    },
    {
      date: "January 2018 - April 2018",
      title: "Shang Tao",
      description: "3d Animation and Multimedia Certificate",
    },
    {
      date: "February 2017 - April 2017",
      title: "Emobilis",
      description: "Mobile Software Development Certificate",
    },
    {
      date: "January 2013 - December 2016",
      title: "Alliance High School",
      description: "KCSE Certificate",
    },
  ];
  return (
    <div>
      <h1 className="font-bold text-[24px] text-center mb-5">Education</h1>
      <HorizontalTimeline events={events} />
    </div>
  );
};

export default Education;
