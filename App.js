import { PageContainer,Title,Subtitle, Imag, TextInput } from "./style";
import Nilsinho from "./assets/nilsinho.png";
import { YellowBox } from "react-native";


export default function App() {
  return <Imag source={Nilsinho} resizeMode="cover">

    <TextInput 
    placeholder="Login..." />

    <TextInput placeholder="Senha..." />
    <Subtitle>Esqueceu a Senha? clique aqui </Subtitle>
    </Imag>

    
}
