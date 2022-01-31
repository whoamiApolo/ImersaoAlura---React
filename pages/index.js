import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import {useRouter} from "next/router";
import React from 'react';
import ReactDOM from 'react-dom';




function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}

// componente react
/* function HomePage() {
    // JSX
    return (
        <div>
            <GlobalStyle />
            <Title tag="h2">Boas Vindas Novamente!</Title>
            <h2>Discord - Alura Matrix</h2>
        </div>
    )
}

export default HomePage */

export default function PaginaInicial() {
    /* const username = 'whoamiApolo'; */
    const [username, setUsername] = React.useState('whoamiApolo');
    const roteamento = useRouter();
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[''], //color plano de fundo
                    backgroundImage: 'url(https://www.otaquest.com/wp-content/uploads/2019/05/Chapter_598.png)', // plano de fundo
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[''], // color fundo layout
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (infosDoEvento) {
                            infosDoEvento.preventDefault();
                            console.log("alguém submeteu ao form")
                            roteamento.push("/chat")
                            // window.location.href = "/chat"; isso gera refresh na página
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Who Am I</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                       {/*  <input
                            type="text"
                            value={username}
                            onChange={function (event) {
                                console.log("Usuário digitou", event.target.value)
                                //cadê o valor
                                const valor = event.target.value;
                                //trocar o valor da variavel atraves do react e avisa quem precisa
                                setUsername(valor)
                            }}
                        /> */}
                        <TextField
                            value={username}
                            onChange={function (event) {
                                console.log("Usuário digitou", event.target.value)
                                //cadê o valor
                                const valor = event.target.value;
                                //trocar o valor da variavel atraves do react e avisa quem precisa
                                setUsername(valor)
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals['040'], // color font
                                    mainColor: appConfig.theme.colors.neutrals['900'],
                                    mainColorHighlight: appConfig.theme.colors.primary['500'],
                                    backgroundColor: appConfig.theme.colors.neutrals['000'], // color fundo 
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],//color font submit
                                mainColor: appConfig.theme.colors.primary["045"], // color fundo submit
                                mainColorLight: appConfig.theme.colors.primary['400'],
                                mainColorStrong: appConfig.theme.colors.primary['011'],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '10px',
                            backgroundColor: appConfig.theme.colors.neutrals[''],// color fundo logo
                            /*  border: '1px solid', */
                            borderColor: appConfig.theme.colors.neutrals['999'],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals['040'],// color font user
                                backgroundColor: appConfig.theme.colors.neutrals['000'], // color name backgrond
                                padding: '10px 20px',
                                borderRadius: '50px',
                                fontWeight: 700
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}
