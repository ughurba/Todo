import styled, { css } from "styled-components";
import {
  styled as MuiStyled,
  css as MuiCss,
  AccordionDetails,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
export const Wrapper = styled.div`
  width: 500px;
`;
const IconStyle = MuiCss`
  opacity: 0.4;
  font-size: 30px;
  cursor: pointer;
`;
export const StyledKeyboardUp = MuiStyled(KeyboardArrowUpIcon)`
${IconStyle}`;
export const StyledKeyboardDown = MuiStyled(KeyboardArrowDownIcon)`
${IconStyle}
`;

export const Tasks = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledCompletedIcon = styled(CheckCircleOutlineIcon)`
  cursor: pointer;
  color: green;
`;
export const StyledUnCompletedIcon = styled(RadioButtonUncheckedIcon)`
  cursor: pointer;
  color: #e7e3e3;
`;
export const Text = styled.span`
  margin-left: 10px;
`;
export const CompletedText = styled.del`
  margin-left: 10px;
`;
export const StyledDetails = MuiStyled(AccordionDetails)`
border:1px solid #e7e3e3;
`;

const FontStyle = css`
  font-size: 15px;
  color: #a9a3a3;
`;
export const SubTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const TaskCount = styled.span`
  ${FontStyle}
`;
export const List = styled.ul`
  display: flex;
  list-style: none;
  cursor: pointer;
`;
export const Link = styled.li`
  margin-left: 10px;
  ${FontStyle}
`;
export const ClearCompleted = styled.span`
  ${FontStyle}
  cursor: pointer;
`;
