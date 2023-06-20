import HorizontalTimeline from "./HorizontalTimeline";

const Work = () => {
  const events = [
    {
      date: "February 2023 - Present",
      title: "iTalanta",
      description: "Open Source Software Developer - Intern",
    },
    {
      date: "January 2022 - July 2022",
      title: "Techware Enterprises Limited",
      description: "Technician - Corporate Client Support",
    },
    {
      date: "September 2021 - October 2021",
      title: "Africa Youth Trust",
      description: "Junior Communications Officer - Community Work",
    },
    {
      date: "May 2021 - September 2021",
      title: "Techware Enterprises Limited",
      description: "Junior Technician - Corporate Client Support",
    },
    {
      date: "February 2020 - April 2020",
      title: "NCBA Bank",
      description: "Credit Analyst - Intern",
    },
  ];
  return (
    <>
      <h1 className="font-bold text-[24px] text-center mb-5">Work Experience</h1>
      <HorizontalTimeline events={events} />
    </>
  );
};

export default Work;
