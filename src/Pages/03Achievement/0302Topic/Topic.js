import _ from "lodash";
import { Title, Card, Flex, Image, Stack, Text, Tabs } from "@mantine/core";
import "../0302Topic/Topic.scss";
import { useState } from "react";

const Topic = (props) => {
    const yearData = [
        {yearNumber:'107', year:'107年'},
        {yearNumber:'108', year:'108年'}, 
        {yearNumber:'109', year:'109年'}, 
        {yearNumber:'110', year:'110年'}, 
        {yearNumber:'111', year:'111年'}, 
        {yearNumber:'112', year:'112年'}, 
    ];

    const data = [
        { 
            title:'互動式程式設計學習平台', 
            partner:['陳怡君', '許瑋芩', '何彥儒', '宋承翰', '黃豊凱'], 
            year:'107', 
            introduction:'在這個資訊蓬勃的時代中，生活上無不缺少與資訊科技相關的事物，人們日常所接觸到的食衣住行育樂，也都包含了各式各樣的資訊技術，由此可見，資訊是生活中不可或缺的一環，根據iThome統計，臺灣在2016年，超過3成的企業要增加資訊人員，並且企業在IT的預算，比起2015年則是增加了10.8%，傳統製造產業也因資訊科技的衝擊，所以須面臨組織的轉型，因此資訊需求只會有增無減。培養一個資訊人員不外乎是從學校開始，在臺灣從高職、大專院校或是大學皆有設置資訊相關係所，在坊間也不乏資訊類補習班，而學習資訊的基礎便是程式設計，但許多初學者往往在學習基礎街段時，便因為無法理解程式邏輯、找不到程式錯誤解決方法或是跟不上學習進度，而讓其對自身的程式學習能力感到不安，進而讓初學者放棄繼續學習的動力，這種情況讓許多畢業於資訊相關科系的學生，出社會後因程度不足，找不到適合的工作，反而從事非資訊相關的工作，造成在學期間，浪費時間以及資源的情況。本研究期望運用開發的互動式程式語言學習網站，設計一套系統可以讓程式初學者，以循序漸進的方式學習，當學習途中遇到問題或是瓶頸時，提供適當的解決方法，當初學者學習新知識後，立即給予新知識的強化，讓初學者逐漸習得，加深知識印象，進而將學習到的知識存入長期記憶，並以互動式的程式學習，激發初學者的學習動機，並開發其潛在能力，同時搭配視覺化的網頁，以及遊戲方式的設計，來呈現整個學習網站，讓初學者保持學習的興趣，而後成功的完成學習進度，可以增強初學者的自我效能，增加其自信心，對學習程式不再恐懼。基於上述，本研究將透過互動式程式語言學習平台，結合學習理論，以學生為對象，搭配JavaScript程式語言，不同於傳統的書本教學，透過本系統的教學設計，吸引學生使用，增加其對學習程式語言的信心，進而加強其對學習程式的興趣，且在學習的過程中，縮短學習程式的碰撞期，並找到自信心。', 
            photo:'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png', 
        },
        { 
            title:'學無止徑', 
            partner:['黃煒凱', '陳俊豪', '黎卋軒', '黃俊霖', '游騰昕'], 
            year:'107', 
            introduction:'隨著二十一世紀來臨，許多新興科技開始快速發展，從民國八十年IBM最早提出的個人電腦，到九十年的Laptop，逐漸發展到民國一百年的智慧型手機裝置，在技術成長同時，人工智慧、大數據以及物聯網的概念被許多學者推出，更將成為未來的科技發展主流。根據天下雜誌報導及相關新聞顯示，現今資訊市場明顯缺乏工程師，未來資訊科技將成為教育主流，程式語言發展成為全球趨勢。近幾年開始，從以往人與人之間的對話，到現今著重思考與機器對話的軟體思維，而人工智慧正是現在的走向，這近三十年來的科技皆脫離不了程式語言的基礎，將來資訊相關發展必定建立於程式語言之根基上，培育資訊人才已成為全球發展重點項目之一。資訊時代的來臨，「資訊工程師」已逐漸成為市場缺乏的人力需求，許多學生想學習程式語言，卻又無法找到實際的學習方式，在學課程多指向理論概念，缺少專案系統的編程實作，且程式語言又再分為前端、後端、資料庫等，每塊亦有不同的語法，使得剛接觸程式設計的學生不知該從何處開始著手學習。社會上亦有看見趨勢之人民，卻無程式語言相關基礎，而市面上的資訊書籍多為理論導向教學，普遍無法實戰於工作之中，使得有程式設計學習需求的人們，無法得知自身學習狀況與缺乏學習資源，以致於實力無法有效提升。有鑑於許多社會新鮮人進入職場之資訊相關人才，因為自身程式程度不足以達成企業所需，導致挫敗感加重；或是對於各項程式語言的專精程度不同，而無法有效發揮自身擅長之事物，達不到「物盡其用，人盡其才」之成效；抑或是對於職場定位不明確，無法找到自身感興趣之職業定位，而對未來發展方向感到徬徨無助，綜合上述原因，讓許多新鮮人可能對於是否選擇此出路而感到猶豫。本系統希望利用多項功能，藉由性向測驗及問卷測驗等，找出自身較感興趣之發展方向，並輔助學習者打好程式設計基礎。', 
            photo:'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', 
        },
        { 
            title:'砍掉重鏈', 
            partner:['黃子銘', '蔡佩君', '林君憶', '吳柏進', '楊鎧睿'], 
            year:'107', 
            introduction:'近年來在區塊鏈的蓬勃發展下，不少以區塊鏈為基礎的應用油然而生。許多企業看準區塊鏈的特性與優勢，紛紛投入區塊鏈的研究和開發，以充分顯示區塊鏈技術已成為資訊科技的重要發展項目。區塊鏈主要特性為去中心化與資料的不可竄改性，其參與區塊鏈網路節點都依照著共識機制寫入鏈上，並且在寫入後與所節點進行同步，以達到去中心化與資料不可竄改性，而現今普遍應用在金融業、保險業等。由於網際網路的快速發展下，網路平台竄升速度直線飆升，物流業所扮演的角色越來越重要，但其供應鏈過於繁複冗長，經常發生丟包爆倉的情形、客戶資料的外洩、消費者錯領誤領等狀況發生，導致其效益不佳。', 
            photo:'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', 
        },
        { 
            title:'肌肉萎縮評估與延緩之研究', 
            partner:['邱仲亭', '林政穎', '吳若慈', '張孝睿', '林怡君', '徐軒輔'], 
            year:'107', 
            introduction:'肌肉萎縮易發生於受傷或大病過後，由於身體活動量大幅下降，導致廢用性肌肉萎縮的發生，因此醫生便會要求患者進行復健。復健是一種循序漸進的治療方式，由於復健治療常需持續較長時間，因此在每次復健的過程中，患者不易感受其是否有成效，無法清楚掌握自身恢復狀況。在復健初期，患者因身體機能下降，原本可輕鬆做到的行為，例如：行走、起立的動作，需花費更大的力氣才能做到生病前的標準，容易讓患者產生挫折感。現代醫學科技發展上，為了讓患者在復健治療中能有更好的恢復效果，發明了許多的輔助科技（Assistive Technology），例如：生物回饋訊號（Bio-feedback）等科技與復健結合的應用。能夠擷取人體訊號並將之數據化，作為生理判斷指標，幫助醫師與病患能更輕易的了解身體狀況。根據過去多數文獻資料，目前幾乎沒有將生物回饋訊號技術結合行動應用程式（APP）的產品出現，如果能使兩者相互結合，讓肌肉萎縮患者能在任何情況下自我檢測，相信能為這類患者帶來更大的幫助。', 
            photo:'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', 
        },
        { 
            title:'幸福IN居', 
            partner:['董子瑜', '蔡侑倫'], 
            year:'107', 
            introduction:'在這個經濟快速發展的時代，現代人越來越注重生活品質，許多年輕族群在考慮居住地點時，會考慮到許多環境及經濟安全等問題。首先是環境相關問題，例如：該地區的紫外線是否過高，是否會造成皮膚或眼睛的傷害；或是空氣中的細懸浮微粒（PM2.5）是否超標，影響到人體呼吸道的危害；亦或居住地附近水質是否在平均值內，能否正常飲用。其次是經濟相關問題，像是生活周遭的交通是否便捷、商家的數目多寡，及對於人身財產和居家安全的顧慮等，然而目前市面上能檢視這些相關數據之系統較為缺乏，也無一套整合式系統可以分析各層面生活居住相關的數據，若能將居住環境周圍的資料量化成有意義的資訊，並分析出結果，讓使用者隨時觀看。勢必能讓民眾更了解自己的居住環境，進而提升生活居住品質。因此本系統採用政府開放資料系統中的OpenData，包括經濟面向：生活便利性與安全性，環境面向：陽光、空氣、水，並結合Google地圖API，開發出一套數據分析系統，提供全臺分布圖供使用者觀看，並以五大評估指標包括：環境指標、安全指標、交通指標、教育指標與便利指標，計算出該地區之幸福指數，欲達成環境狀態檢測、施政方向之參考、移居人口提升之三點目的。', 
            photo:'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png', 
        },
        { 
            title:'Codio—雲端程式碼編輯協作平台', 
            partner:['許歆荷', '王敬夫', '江穎旻', '賴育晨', '劉容安'], 
            year:'108', 
            introduction:'科技的趨勢與演進為產業帶來了翻天覆地的革命，同時也帶動IT人力的需求變革，隨著雲端運算、行動應用、大數據、人工智慧、物聯網等技術蓬勃發展，人才已經成為企業競爭力的一大關鍵，而這其中，資訊科技相關的人力更是求才若渴。根據104人力銀行統計，2018年「5大資料經濟職務需求趨勢」之數據顯示，其中軟體工程師佔很高的比例，缺口竟高達三萬一千個工作數，相較2014 年需求成長58%，而我們亦發現愈來愈多人為因應此趨勢，試圖涉足資訊產業，導致諸多程式開發與學習者的出現。然而，若選擇自行學習程式語言，初學者不外乎會碰到的困境為因學習一個全新的程式語言、熟悉一個全新的開發環境（整合開發環境，IDE），並且與陌生團隊合作，使得眾多開發者於學習過程，喪失信心、迷失方向，陷入永無止境的掙扎與困境中，甚至放棄了成為軟體工程師的目標。而本團隊經過多次研究與討論後，整合現今市場上的線上程式碼編輯平台之優點，期望打造一座雲端程式碼編輯平台，目前先行提供網頁前端HTML、CSS、JavaScript等程式語言，專案開發除了基本的新增、修改等功能之外，使用者得以對專案作品進行評價、分享與收藏，獲得他人肯定與認同價值，並從與他人討論、交流的互動過程中，彼此相互獲得回饋。其中本平台針對團隊合作，制定「即時共同編輯專案」功能，解決開發者長期以來多人開發專案上不便之痛點，亦可讓初學者學習他人的專案程式寫法，作為自身撰寫程式碼的經驗累積；於淬取精華後，重新加以梳理之後整理成冊，做為技能傳承以及後進者的操作指引，並且減少學習和教育訓練的時間；於團隊作業或是企業經營，則為提升往後團隊協同效率。最重要的是透過Codio雲端編輯平台的知識管理與保存以及交流、互動的環境中，提升「知識」分享，進而激發創新行為的產生。', 
            photo:'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png', 
        }, 
        { 
            title:'HI-MIND精神壓力與照護系統', 
            partner:['林郁翔', '呂易蓁', '呂哲嶙', '謝瑜庭', '陳萱'], 
            year:'109', 
            introduction:'伴隨著資訊科技快速發展，現今生活環境便利，科技快速躍進，相對也帶來了龐大壓力，忙碌生活、交際應酬、以及網路成癮等等，使得人們休息時間越來越少，壓力也成為生活中的一部分。適度的壓力，可有助於刺激潛能，提升個人成長表現，但當周遭的環境壓力，超過個體所能負荷時，該個體就有可能產生「精神疾病」。當個體無法負荷過大的精神壓力時，就容易產生憂鬱症、躁鬱症、精神分裂等精神疾病，更可能伴隨著心血管疾病等慢性疾病的問題，因此學會適度的釋放壓力，才能夠擁有健康的身心。現代人生活步調快速，對於自身健康較無暇管理，若到醫療機構進行精神壓力的檢測，程序繁雜且耗時，因而時常忽略身體發出的警訊，因此個人醫療照護系統日漸受到重視。透過穿戴式裝置與行動載具的結合，將精神壓力的資訊放置行動載具應用程式(Application, APP)中，使用者就能透過行動載具得知自己的精神壓力狀況，並針對精神壓力的程度改善其身心狀況。為避免患者長期處於高度壓力環境下而不自知，導致精神及慢性疾病的產生，此應用程式具有即時評估壓力狀態的功能，當壓力超出所預設的值就發出警訊，幫助使用者提高警覺，降低罹患精神、心血管等疾病的風險。本文將探討如何利用行動載具之應用程式，來檢測受測者目前的精神狀態，並且提出警示訊息以及給予有效的建議。受測者將帶上具有檢測心跳、睡眠等的穿戴式偵測裝置，藉由藍芽技術將受測者的生理參數資訊傳輸到行動載具的應用程式中，診斷受測者的精神壓力程度，並根據壓力程度不同，給予適當的舒壓建議。當受測者的生理參數超出所設定的標準，行動載具會出現警示訊息，提醒受測者須提高警覺並給予紓壓建議，應用程式會記錄生理參數的資訊，並根據壓力評估數據對受測者進行有效的建議。基於上述，預計本研究將透過穿戴式裝置結合深度學習以及行動應用程式(APP)的行動照護，將能在精神壓力過大時，即時提醒並給予適當的紓壓建議，避免精神與慢性疾病的產生。快速方便的精神壓力狀態提醒、顯示與比較功能將協助使用者了解與管理自身的精神壓力狀態，這樣的創新將可能帶來行動醫療照護的商機。', 
            photo:'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png', 
        }, 
        { 
            title:'手影隨行', 
            partner:['陳奕伶', '王子瑜', '江糖晴', '柯宣竹', '沈舜鴻', '廖偉翔'], 
            year:'110', 
            introduction:'根據衛生福利部統計處統計，至2020年臺灣人口有1,198,358人為身心障礙者，其中聽覺機能障礙者、聲音機能障礙者與語言機能障礙者（以下簡稱聽語障者），人數高達140,000人，近十年來，人數更是逐年遞增。換句話說，在臺灣我們生活周遭每168人，就有機會遇到1位聽語障者。聽語障者在與健聽者交談時，多使用手語、口語，或是透過文字的方式來傳遞訊息，其中最直接也最簡單的交談方式是透過文字書寫，但是以文字書寫做為交談的媒介，其實速度遠比手語或口語直接表達還要慢上許多；再者，聽語障者的口語因為聽覺與言語上的障礙，在學習與使用上較為困難，除此之外，通常僅有身邊有家人朋友為聽語障者，有長期交談需求，才會使健聽者主動學習手語，導致「手語」與「會手語的人」在現有社會上不普及；因此，健聽者與聽語障者之間，往往需要透過手語翻譯員的協助，使雙方溝通更順暢。根據我國勞動部統計，近五年考取「手語翻譯丙級技術士」及「手語翻譯乙級技術士」之人數僅有504位，占全臺人口的0.002%，由此可知，聽語障者與手語翻譯員的供需失衡，進而導致聽語障者與外界溝通困難，也產生了語言的隔閡。', 
            photo:'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png', 
        },
        { 
            title:'焦慮', 
            partner:['黃晏綾', '黃宥欣', '謝沛璇', '莊勝傑'], 
            year:'111', 
            introduction:'根據研究指出青春期為自殺意念與行為發生風險最常增加的時期，任何有可能會被批評的場合都是患者所害怕的，無限放大他人對自我的看法，進而引發社交恐慌，對任何事情都無法掌握，長久累積下來不僅影響生活、無法經濟獨立及喪失與他人溝通的能力之外，也容易讓人錯失很多機會，且亦使得患者變得孤獨。患者會為了避免社交恐慌，選擇逃避待在家裡或是透過酒精協助，反而會造成身體上更大的負擔，無法讓患者的情況徹底改善。在現實生活中，患者不願意面對現實世界中的問題，會產生心理防禦避免直接對問題之反應，不僅降低治療效果，甚至加重患者的社交恐慌，造成二度、三度傷害，若能將治療的方式虛擬化，提供擁有個人隱私的環境，放心在其中學會應對與探索各種情緒，讓患者能夠自我調整，在治療過程中不斷嘗試及突破，並且提供使用者視覺化圖表，自我檢視、從中獲得成就感，勢必能讓患者接觸到真實生活的情況時能具有較高的容忍度。因此，我們整理出以下目的：(1)降低加重患者病情之誘因，提供具有個人隱私的虛擬治療環境(2)使用多樣化情境，易於模擬患者畏懼的場景及情形(3)虛擬情境替代面對面治療，患者可彈性且漸進式調整治療強度(4)提供輔助診斷，有助於醫師制定應對策略，降低過多醫療成本綜合上述目的，本系統以虛擬實境(VR)情境治療方式(圖一)，提供患者替代面對面治療，練習多樣化之社交情境場景，透過先前問卷調查，並針對不同程度之患者設計關卡情境治療，患者也可透過多次練習查看相關數據分析，比較前後是否有達到減緩之效果。', 
            photo:'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png', 
        },
        { 
            title:'食在好孕', 
            partner:['林桓平', '詹龍傑', '徐欣怡', '楊孟翌', '湯俊璋'], 
            year:'112', 
            introduction:'「食在好孕」以飲食的角度出發，將「ChatGPT」、「DALL-E」、「自然語言處理(NLP)」與「文字探勘」技術做結合。本系統根據產婦過去的飲食習慣與喜好，透過關鍵字生成菜色清單，在兼顧營養的情況下，同時為其提供最合適的菜色推薦，也能讓產婦自由調配餐點。除了以文字的方式呈現外，本系統搭配「DALL-E」所生成的菜色預覽圖，讓產婦在文字與圖片的雙重呈現下能激發食慾，使其對於每一餐都抱持期待的心，能有足夠的精力面對每日的挑戰。', 
            photo:'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png', 
        },
    ];

    const [selectYear, setSelectYear] = useState('108');

    console.log('select year', selectYear);
    console.log('select year data', _.filter(data, {'year': selectYear}));
    return (
        <div id="Topic">
            <Title className="title">Topic</Title>
            
            <Tabs defaultValue="108">
                <Tabs.List>
                    {_.map(yearData, (data) => (
                        <Tabs.Tab 
                            key={data.yearNumber}
                            value={data.yearNumber}
                            onClick={() => {
                                setSelectYear(data.yearNumber)
                            }}
                        >
                            <Text fw={500}>{data.year}</Text>    
                        </Tabs.Tab>
                    ))}
                </Tabs.List>

                {_.map(_.filter(data, {'year': selectYear}), (item) => (
                    <Tabs.Panel value={selectYear}>
                        <Card
                            shadow="sm"
                            padding="lg" 
                            radius="md" 
                            withBorder
                            style={{margin:'20px 0'}}
                        >
                            <Flex 
                            
                            >
                                <Image
                                    src={item.photo}
                                    w={500}
                                    h={500}
                                    style={{margin:'0 20px'}}

                                />
                                <Stack
                                    align="flex-start"
                                    justify="flex-start"
                                    style={{margin:'0 20px', width:'100%'}}
                                >
                                    <Title order={3}>{item.title}</Title>
                                    <Text c='dimmed'>
                                        {_.map(item.partner, (partner) => (
                                            partner + "　"
                                        ))}
                                    </Text>
                                    <Text>{item.introduction}</Text>
                                </Stack>
                            </Flex>
                        </Card>
                    </Tabs.Panel>
                ))}
                {/* <Tabs.Panel value={selectYear}>
                    
                </Tabs.Panel> */}
            </Tabs>
            
            {/* <Card
                shadow="sm"
                padding="lg" 
                radius="md" 
                withBorder
                // style={{width:'50%'}}
            >
                <Flex style={{width:'50%'}}>
                    <Image
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                        w={500}
                    />
                    <Stack
                        align="flex-start"
                        justify="flex-start"
                    >
                        <Text>123</Text>
                        <Text>123</Text>
                        <Text>123</Text>
                    </Stack>
                </Flex>
            </Card> */}
        </div>
    )
}

export default Topic;