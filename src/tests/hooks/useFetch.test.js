import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('test useFetch.js', () => {
  
    test('debe retornar el valor por defecto', () => {
        const {result } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`) )
        
        console.log(result.current)
    
        const {data ,loading ,error } = result.current;
        expect(data).toBe( null ) ;
        expect(loading).toBe( true );
        expect(error).toBe( null );
    });
    test('debe de tener la info deseada, loading false , error null', async () => {
        
        const {result ,waitForNextUpdate} = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`) )

        await waitForNextUpdate();
        const {data ,loading ,error } = result.current;
        expect( data.length ).toBe(1);
        expect(loading).toBe( false );
        expect(error).toBe( null );
    });
    test('debe de tener de manejar el error', async () => {
        
        const {result ,waitForNextUpdate} = renderHook( () => useFetch(`https://reqres.in/apid/users?page=2`) )

        await waitForNextUpdate();
        const {data ,loading ,error } = result.current;
        expect( data ).toBe(null);
        expect(loading).toBe( false );
        expect(error).toBe( 'no se pudo cargar la info' );
    });

    
    

    
})
