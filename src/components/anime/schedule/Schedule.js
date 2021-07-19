import React, { useState, useEffect } from "react";
import jikan from "../../../apis/jikan";
import { Tab, Container, Loader } from "semantic-ui-react";
import MyGallery from "../../others/MyGallery";
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
    { menuItem: "Monday", render:()=><Tab.Pane><MyGallery items={schedule.monday} /></Tab.Pane>  },
    { menuItem: "Tuesday", render:()=><Tab.Pane> <MyGallery items={schedule.tuesday} /></Tab.Pane> },
    { menuItem: "Wednesday", render:()=><Tab.Pane> <MyGallery items={schedule.wednesday} /></Tab.Pane> },
    { menuItem: "Thursday", render:()=><Tab.Pane> <MyGallery items={schedule.thursday} /></Tab.Pane> },
    { menuItem: "Friday", render:()=><Tab.Pane> <MyGallery items={schedule.friday} /></Tab.Pane> },
    { menuItem: "Saturday", render:()=><Tab.Pane> <MyGallery items={schedule.saturday} /></Tab.Pane> },
    { menuItem: "Sunday", render:()=><Tab.Pane> <MyGallery items={schedule.sunday} /></Tab.Pane> },
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
