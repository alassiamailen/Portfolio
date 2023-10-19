"use client";

import React from 'react';
import{
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from "@react-email/components";

import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailsProps={
    message: string;
    senderEmail: string;
}
export default function ContactFormEmail({message,senderEmail} :ContactFormEmailsProps) {

    console.log("entre1");
  return (
    <Html>
        <Head/>
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className='bg-gray-100 text-black'>
                    <Container>
                        <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                            <Heading className='leading-tight'>You received the following message from tge contact form</Heading>
                            <Hr/>
                            <Text>{message}</Text>
                            <Hr/>
                            <Text>The senders email is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        
    </Html>
  )
}
