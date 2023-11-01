"use server";
import React from "react";
import {Resend} from "resend";
import { validateStringth,getErrorMessage } from "@/lib/utils";
import ContactFormEmail from '@/email/contact-form-email';



const resend= new Resend(process.env.RESEND_API_KEY);

export const SendEmail= async(formData: FormData)=>{
   
    const message= formData.get('message');
    const senderEmail= formData.get('senderEmail')   
    
    if(!validateStringth(senderEmail,500)){
        return{
            error: "Invalid sender email"
        }
    }
    if(!validateStringth(message,5000)){
        return{
            error: "Invalid message"
        }
    }
    
    let data;

    try {
       data= await resend.emails.send({             
              
            from:"Contact form <onboarding@resend.dev>",
            to: "alassiamailen3@gmail.com",
            subject:"message from contact form",
            reply_to: senderEmail as string,
            // text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
              }),

        })
        
    } catch (error) {
        return{
            error: getErrorMessage(error)
        }      
    }
   return{
    data
   }

}

