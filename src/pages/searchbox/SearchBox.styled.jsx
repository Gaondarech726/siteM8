import { HiSearch } from "react-icons/hi";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 10px 32px 10px 10px;
  border-radius: 4px;
  font: inherit;
  border: transparent;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;
