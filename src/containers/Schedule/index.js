import React, { useState, useEffect } from "react";
import jikan from "../../apis/jikan";
import { Tab, Container, Loader } from "semantic-ui-react";
import AnimeGallery from "../../components/AnimeGallery";
const Schedule = () => {
  const [schedule, setSchedule] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await jikan.get("/schedule");
      setSchedule(response.data);
    }
    fetchData();
  }, []);
  const panes = [
    { menuItem: "Monday", render:()=><Tab.Pane><AnimeGallery items={schedule.monday} /></Tab.Pane>  },
    { menuItem: "Tuesday", render:()=><Tab.Pane> <AnimeGallery items={schedule.tuesday} /></Tab.Pane> },
    { menuItem: "Wednesday", render:()=><Tab.Pane> <AnimeGallery items={schedule.wednesday} /></Tab.Pane> },
    { menuItem: "Thursday", render:()=><Tab.Pane> <AnimeGallery items={schedule.thursday} /></Tab.Pane> },
    { menuItem: "Friday", render:()=><Tab.Pane> <AnimeGallery items={schedule.friday} /></Tab.Pane> },
    { menuItem: "Saturday", render:()=><Tab.Pane> <AnimeGallery items={schedule.saturday} /></Tab.Pane> },
    { menuItem: "Sunday", render:()=><Tab.Pane> <AnimeGallery items={schedule.sunday} /></Tab.Pane> },
  ];

  return (
    <Container>
      {schedule ? (
        <Tab panes={panes} renderActiveOnly={true} />
      ) : (
        <Loader />
      )}
    </Container>
  );
};
export default Schedule;
