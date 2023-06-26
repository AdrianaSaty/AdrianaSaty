import React from 'react';
import avatar from '../../img/avatar.png';
import Accordion from '../../components/Accordion/Accordion';
import './Products.scss';


interface Product {
    title: string,
    description: string,
    ad_encoding: string,
    ad_linktree: string
}

interface Products extends Array<Product> { }

const products: Products = [
    {
        title: "Monitor Gamer LG Ultrawide",
        description: "https://www.amazon.com.br/Monitor-LG-29UM69G-UltraWide-FreeSync/dp/B078TPLC2X?keywords=monitor+lg+29+ultrawide&qid=1681353057&sprefix=ultrawide+l%2Caps%2C231&sr=8-2&linkCode=li2&tag=insta-linktree-20&linkId=9f8a4ba59990407f88f9374e819f2528&language=pt_BR&ref_=as_li_ss_il",
        ad_encoding: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078TPLC2X&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR",
        ad_linktree: "https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=B0B11LJ69K"
    },
    {
        title: "Mouse Logitech MX Master",
        description: "https://www.amazon.com.br/Logitech-MX-Master-3S-Superf%C3%ADcie/dp/B0B11LJ69K?keywords=mouse+mx+master+3s&qid=1681353579&sprefix=mouse+mx+m%2Caps%2C251&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMzZKNUxYT1NNUFRDJmVuY3J5cHRlZElkPUEwODUwNTAxMktHTTEzTDhKRlA2RSZlbmNyeXB0ZWRBZElkPUEwNzg2OTIzMTdQUDZXTTZHMjRORiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&linkCode=li2&tag=insta-linktree-20&linkId=9401a655a8bda314547b9f8f0b7f204e&language=pt_BR&ref_=as_li_ss_il",
        ad_encoding: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B11LJ69K&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR",
        ad_linktree: "https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=B0B11LJ69K"
    }
]

function Products() {
    return (
        <div className="products">
            <div className="stars-small"></div>
            <div className="stars-big"></div>
            <div className='center'>
                <header>
                    <figure className='txt-center'>
                        <img className="img-avatar" src={avatar} alt="Foto de Adriana Saty sorrindo com fundo preto" />
                    </figure>
                    <h1>@Adriana.Saty</h1>
                </header>
            </div>
            <section>
                <h1 className='setup'>Meu Setup</h1>
                <div className='row justify-content-center'>
                    <div className='mt-3 mb-3'>
                        {products.map((item: Product, i: number) => (
                            <Accordion title={item.title} description={item.description} ad_encoding={item.ad_encoding} ad_linktree={item.ad_linktree} key={i} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3>Monitor Gamer LG Ultrawide</h3>
                    <a href="https://www.amazon.com.br/Monitor-LG-29UM69G-UltraWide-FreeSync/dp/B078TPLC2X?keywords=monitor+lg+29+ultrawide&qid=1681353057&sprefix=ultrawide+l%2Caps%2C231&sr=8-2&linkCode=li2&tag=insta-linktree-20&linkId=9f8a4ba59990407f88f9374e819f2528&language=pt_BR&ref_=as_li_ss_il" target="_blank">
                        <img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B078TPLC2X&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR" />
                    </a>
                    <img src="https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=B078TPLC2X" width="1" height="1" alt="" />
                </div>
                <div>
                    <h3>Mouse Logitech MX Master</h3>
                    <a href="https://www.amazon.com.br/Logitech-MX-Master-3S-Superf%C3%ADcie/dp/B0B11LJ69K?keywords=mouse+mx+master+3s&qid=1681353579&sprefix=mouse+mx+m%2Caps%2C251&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMzZKNUxYT1NNUFRDJmVuY3J5cHRlZElkPUEwODUwNTAxMktHTTEzTDhKRlA2RSZlbmNyeXB0ZWRBZElkPUEwNzg2OTIzMTdQUDZXTTZHMjRORiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&linkCode=li2&tag=insta-linktree-20&linkId=9401a655a8bda314547b9f8f0b7f204e&language=pt_BR&ref_=as_li_ss_il" target="_blank">
                        <img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B11LJ69K&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR" />
                    </a>
                    <img src="https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=B0B11LJ69K" width="1" height="1" alt="" />
                </div>
                <div>
                    <h3>Macbook Pro M1</h3>
                    {/* <a href="https://www.amazon.com.br/Macbook-Retina-Apple-Prata-Processador/dp/B08V77SDLZ?keywords=macbook%2Bpro%2Bm1%2B8gb%2B512gb&qid=1681353710&sprefix=macbook%2Bpro%2Bm1%2B8gb%2Caps%2C227&sr=8-1&th=1&linkCode=li2&tag=insta-linktree-20&linkId=da988e5c10d313bc1658bfb87367e508&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08V77SDLZ&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=B08V77SDLZ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> */}
                </div>
                <div>
                    <h3>Suporte Para Notebook</h3>
                    {/* <a href="https://www.amazon.com.br/Suporte-Notebook-MacBook-Alum%C3%ADnio-Ajust%C3%A1vel/dp/B086CB6BXW?keywords=suporte+para+notebook&qid=1681353897&s=computers&sprefix=supor%2Ccomputers%2C215&sr=1-7&linkCode=li2&tag=insta-linktree-20&linkId=02bce6bd05ffdd6de4bc74ba4e5b1992&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B086CB6BXW&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=B086CB6BXW" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> */}
                </div>
                <div>
                    <h3>Microfone</h3>
                    {/* <a href="https://www.amazon.com.br/Microfone-HyperX-Solocast-USB-Compat%C3%ADvel/dp/B08KFL3SFV?keywords=microfone+hyperx&qid=1681354111&s=electronics&sprefix=hyperx+m%2Celectronics%2C207&sr=1-2&linkCode=li2&tag=insta-linktree-20&linkId=c9904ad4e6544a2c4e7e10ad164e7ece&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08KFL3SFV&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=B08KFL3SFV" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> */}
                </div>
                <div>
                    <h3>Suporte Para Microfone</h3>
                    {/* <a href="https://www.amazon.com.br/gp/product/B08B459NF9?ie=UTF8&psc=1&linkCode=li2&tag=insta-linktree-20&linkId=680c14bbd6eb45e40ab57a8eef5d1fd0&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08B459NF9&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=B08B459NF9" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> */}
                </div>
                <div>
                    <h3>Alexa Echo Dot</h3>
                    {/* https://www.amazon.com.br/Echo-Dot-4%C2%AA-gera%C3%A7%C3%A3o-Cor-Preta/dp/B084KQBYYM/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ZHXQOCMC0BUN&keywords=alexa&qid=1681354546&sprefix=alexa%2B%2Caps%2C231&sr=8-1&th=1 */}
                </div>
                <div>
                    <h3>Switch: 2 pcs e 1 monitor</h3>
                    <a href="https://www.amazon.com.br/Splitter-bidirecional-Exibi%C3%A7%C3%A3o-Adaptador-comuta%C3%A7%C3%A3o/dp/B08N6ZTBRF?keywords=baseus+switch+hdmi&qid=1681353260&sprefix=baseus+swi%2Caps%2C227&sr=8-2&linkCode=li2&tag=insta-linktree-20&linkId=b6711f0f20422a56c8fefab5c6fd9a59&language=pt_BR&ref_=as_li_ss_il" target="_blank">
                        <img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08N6ZTBRF&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR" />
                    </a>
                    <img src="https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=B08N6ZTBRF" width="1" height="1" alt="" />
                </div>
            </section>
            <section>
                <h2>Livros Técnicos</h2>
                <div>
                    <h3>Desconstruindo a Web</h3>
                    <a href="https://www.amazon.com.br/dp/8555192102?psc=1&linkCode=li2&tag=websaty-20&linkId=b077d1efe2e0059e25e714327202e340&language=pt_BR&ref_=as_li_ss_il" target="_blank">
                        <img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=8555192102&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=websaty-20&language=pt_BR" />
                    </a>
                    <img src="https://ir-br.amazon-adsystem.com/e/ir?t=websaty-20&language=pt_BR&l=li2&o=33&a=8555192102" width="1" height="1" alt="" />
                </div>

                código limpo
                {/* <a href="https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=36QOECMHG1OYB&keywords=clean+code&qid=1681354252&sprefix=clean+code%2Caps%2C215&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWjY3TVY3TE9NN1k1JmVuY3J5cHRlZElkPUEwNzQzOTkzM0lOUUxQNEwxVzRIUiZlbmNyeXB0ZWRBZElkPUEwNDEwMzgwUUFQVzQ0QTBRTE5EJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ%3D%3D&linkCode=li2&tag=insta-linktree-20&linkId=a971d932e3fcaa737c232745996ddd94&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=8576082675&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=8576082675" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> */}


                scrum
                {/* <a href="https://www.amazon.com.br/SCRUM-fazer-dobro-trabalho-metade/dp/8543107164?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=AL5ON5SDE51P&keywords=scrum&qid=1681354277&sprefix=scru%2Caps%2C218&sr=8-1&linkCode=li2&tag=insta-linktree-20&linkId=8602219e895fbe12d97f4c30dcf6c47b&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=8543107164&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=8543107164" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
                 */}
            </section>
            <section>
                <h2>Acessórios</h2>
                <div>
                    <h3>Kit limpador de setup</h3>
                    {/* <a href="https://www.amazon.com.br/dp/B09NBTW79W?psc=1&linkCode=li2&tag=insta-linktree-20&linkId=ca7bc27f289cc36f99040800e61a1ff9&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09NBTW79W&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=B09NBTW79W" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> */}
                </div>
                <div>
                    <h3>Pano Limpa Telas</h3>
                    {/* <a href="https://www.amazon.com.br/dp/B0779NJH7F?psc=1&linkCode=li2&tag=insta-linktree-20&linkId=43f0b22985612ba23fa7baa50553875a&language=pt_BR&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0779NJH7F&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=insta-linktree-20&language=pt_BR" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=insta-linktree-20&language=pt_BR&l=li2&o=33&a=B0779NJH7F" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> */}
                </div>
                <div>
                    <h3></h3>
                </div>
            </section>
        </div>

    )
}

export default Products