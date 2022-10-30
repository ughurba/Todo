import { CustomForm } from "../form";
import { FC, useState } from "react";
import {
  Wrapper,
  StyledCompletedIcon,
  StyledUnCompletedIcon,
  Tasks,
  Text,
  CompletedText,
  StyledDetails,
  SubTasks,
  TaskCount,
  List,
  Link,
  ClearCompleted,
} from "./style";
import { Accordion, AccordionSummary, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const StyledAccordionSummary = styled(AccordionSummary)``;
interface Props {
  filteredTask: Task[];
  handleCompletedClick: (item: Task) => void;
  handleClearCompleted: () => void;
  setFilter: (filter: boolean | undefined) => void;
  setTask: (task: Task) => void;
}

export const Accordions: FC<Props> = ({
  filteredTask,
  setTask,
  handleCompletedClick,
  handleClearCompleted,
  setFilter,
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Wrapper>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <CustomForm setTask={setTask} />
        </AccordionSummary>
        {filteredTask.map((item, i) => (
          <StyledDetails key={i}>
            <Tasks>
              {item.completed ? (
                <>
                  <StyledCompletedIcon
                    onClick={() => handleCompletedClick(item)}
                  />
                  <CompletedText>{item.taskName}</CompletedText>
                </>
              ) : (
                <>
                  <StyledUnCompletedIcon
                    onClick={() => handleCompletedClick(item)}
                  />
                  <Text>{item.taskName}</Text>
                </>
              )}
            </Tasks>
          </StyledDetails>
        ))}
        <SubTasks>
          <TaskCount>
            {filteredTask.filter((t) => t.completed).length} items
          </TaskCount>
          <div>
            <List>
              <Link onClick={() => setFilter(undefined)}>All</Link>
              <Link onClick={() => setFilter(false)}>Active</Link>
              <Link onClick={() => setFilter(true)}>Completed</Link>
            </List>
          </div>
          <ClearCompleted onClick={handleClearCompleted}>
            Clear completed
          </ClearCompleted>
        </SubTasks>
      </Accordion>
    </Wrapper>
  );
};
