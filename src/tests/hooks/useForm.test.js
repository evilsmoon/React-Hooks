import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('test useForm.js', () => {

    const initialForm = {
        name: 'gabriel',
        email: 'gabriel@gmail.com'
    };
    test('debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));

        const [Formvalues, handelInputChange, reset] = result.current;
        expect( JSON.stringify(Formvalues) ).toBe( JSON.stringify(initialForm) )
        expect( typeof handelInputChange ).toBe('function')
        expect( typeof reset ).toBe('function')



    }); 'function'
    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const [, handelInputChange, reset] = result.current;

        act(()=>{
            handelInputChange({
                target:{
                    name: 'name',
                    value:'Gabriel'
                }
            });
        });

        const [ FormValue ] =result.current;

        expect ( FormValue).toEqual( {...initialForm,name:'Gabriel'})
    });
    test('debe de re-establecer el formulario con RESET ', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const [, handelInputChange, reset] = result.current;

        act(()=>{
            handelInputChange({
                target:{
                    name: 'name',
                    value:'Gabriel Morales'
                }
            });
            reset();
            
        });

        const [ FormValue ] =result.current;
        
        expect( FormValue ).toBe( initialForm);
    });




})
