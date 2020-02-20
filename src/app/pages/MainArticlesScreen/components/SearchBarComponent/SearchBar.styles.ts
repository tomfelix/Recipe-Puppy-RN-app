import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const StyledInputField = styled(TextInput)`
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  ::-webkit-calendar-picker-indicator {
    opacity: 100;
  }
`;
