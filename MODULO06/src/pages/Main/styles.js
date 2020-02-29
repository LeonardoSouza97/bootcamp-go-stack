import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #EEE;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #9999;
  border-radius: 4px;
  padding: 0 12px;
  border: 1px solid #EEE;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c2;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  color: #EEE;
  opacity: ${props => props.loading ? 0.7 : 1}
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const Name = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #333;
  font-weight: bold;
  margin-top:4px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #EEE;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  text-align: center;
  margin-bottom: 4px;
  line-height: 18px;
  font-size: 13px;
  color: #999;
  margin-top: 5px;
`;

export const ProfileButton = styled(RectButton)`
 align-self: stretch;
 align-items: center;
 justify-content: center;
 border-radius: 4px;
 height: 36px;
 margin: 10px;
 background: #7159c1;
`;

export const ProfileButtonText = styled.Text`
 text-transform: uppercase;
 color: #FFF;
 font-weight: bold;
 font-size: 12px;
`;
