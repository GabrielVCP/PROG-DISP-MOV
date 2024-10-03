import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function Componente() {
  let nome = 'Gabriel Vicente Cobianqui Pacheco';
  let img = 'https://labes.inf.ufes.br/wp-content/uploads/sem-foto.jpg';
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Meu Perfil</Text>
      <Image
        source={{ uri: img }}
        style={styles.image}
      />
      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>Idade: 24</Text>
      <Text style={styles.text}>Formação: Faculdade de Tecnologia de Praia Grande</Text>
      <Text style={styles.text}>Experiência: -</Text>
      <Text style={styles.text}>Projetos: App Meu Perfil</Text>
    </View>
  );
}

export default Componente;
