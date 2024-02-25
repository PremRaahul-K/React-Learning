import { useState } from "react";
import { produce } from "immer";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxLength={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iure
        quidem ducimus perspiciatis non similique corporis nobis, beatae
        quibusdam, ea nesciunt unde, laudantium cumque labore neque? Cum ex quis
        modi est perferendis, dolore tenetur debitis quo vero odio enim
        necessitatibus sunt. Expedita quod officia possimus incidunt explicabo
        eveniet asperiores doloribus veritatis ullam maiores molestiae a ut
        reprehenderit ducimus iusto error quisquam, sed nam, ipsam veniam
        aperiam id quam consequuntur. Saepe recusandae id ipsa impedit? Ipsa
        corrupti, at accusamus distinctio facere ipsum voluptatibus cum esse
        labore velit excepturi, quam quae? Deserunt dolores animi similique id
        quam ea voluptate dignissimos harum ullam. Quisquam, quos. Quisquam
      </ExpandableText>
    </div>
  );
}

export default App;
