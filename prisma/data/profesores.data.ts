import { Prisma } from "@prisma/client";

export const profes: Prisma.ProfesorCreateManyInput [] =[
    {
        nombre:'Jose Ernesto juarez',
        correo:'Josen@gmail.com',        
        encargado:true,                
    },
    {
        nombre:'Rene Marriquez juarez',
        correo:'Rener@gmail.com',        
        encargado:true,
                            
    },
    {
        nombre:'Maria Belen Perez',
        correo:'Mae@gmail.com',        
        encargado:true,
                
    },
    {
        nombre:'JoseManuel Pelaes',
        correo:'Joenr@gmail.com',        
        encargado:true,
                
    },
    {
        nombre:'Jacinto Melano ',
        correo:'Jac@gmail.com',        
        encargado:true,
                
    },
    {
        nombre:'Manuel Ernesto Smit',
        correo:'ene@gmail.com',        
        encargado:true,              
    },
    {
        nombre:'Manuel fernandez',
        correo:'ner@gmail.com',        
        encargado:true,              
    },
    {
        nombre:'Rigo  Mendez',
        correo:'Riene@gmail.com',        
        encargado:true,              
    },
    {
        nombre:'Renato cruz',
        correo:'resa@gmail.com',        
        encargado:false,              
    },
] 