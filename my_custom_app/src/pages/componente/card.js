export default function Card( { data } ) {
    return( 
             <span> 
                   Esto es un texto insertado: { data.text } 
             </span>
    );
  }