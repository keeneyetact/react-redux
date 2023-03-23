import Saad from '../assets/images/avatars/sadh.png'
import Akash from '../assets/images/avatars/akash.png'
import Almas from '../assets/images/avatars/almas.png'
import Ferdous from '../assets/images/avatars/ferdous.png'
import Riyadh from '../assets/images/avatars/riyadh.png'
import Salahuddin from '../assets/images/avatars/salahuddin.png'
import Sumit from '../assets/images/avatars/sumit.png'


const Img = (team) => {
    switch (team?.name) {
        case 'Saad Hasan':
            return Saad
        case 'Sumit Saha':
            return Sumit
        case 'Akash Ahmed':
            return Akash
        case 'Md Salahuddin':
            return Salahuddin
        case 'Riyadh Hassan':
            return Riyadh
        case 'Ferdous Hassan':
            return Ferdous
        case 'Arif Almas':
            return Almas
    
        default:
            return ;
    }
}

export default Img