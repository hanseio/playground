const translations = { //언어 추가 시 작업, 단위 추가 시 작업
    ko: {
        title: "단위 변환기",
        fromValue: "값:",
        fromUnit: "단위:",
        toUnit: "변환할 단위:",
        decimalPlaces: "소수점 자릿수:",
        placeholder: "변환할 값",
        invalidNumber: "유효한 숫자를 입력해주세요.",
        lengthButton: "길이",
        weightButton: "무게",
        areaButton: "면적",
        volumeButton: "부피",
        temperatureButton: "온도",
        timeButton: "시간",
        speedButton: "속도",
        dataSizeButton: "데이터 크기",
        energyButton: "에너지",
        pressureButton: "압력",
        angleButton: "각도",
        frequencyButton: "주파수",
        units: {
            length: {
                '미터': '미터 (m)',
                '킬로미터': '킬로미터 (km)',
                '센티미터': '센티미터 (cm)',
                '밀리미터': '밀리미터 (mm)',
                '인치': '인치 (in)',
                '피트': '피트 (ft)',
                '야드': '야드 (yd)',
                '마일': '마일 (mi)',
                '마이크로미터': '마이크로미터 (µm)',
                '나노미터': '나노미터 (nm)',
                '해리': '해리 (NM)',
                '퍼롱': '퍼롱 (furlong)',
                '광년': '광년 (ly)',
                '천문단위': '천문단위 (AU)',
                '파섹': '파섹 (pc)',
                '에렉트론': '에렉트론 (cubit)',
                '링크': '링크 (lnk)',
                '체인': '체인 (ch)',
                '로드': '로드 (rd)',
                '폴': '폴 (pole)',
                '퍼치': '퍼치 (perch)'
            },
            weight: {
                '그램': '그램 (g)',
                '킬로그램': '킬로그램 (kg)',
                '밀리그램': '밀리그램 (mg)',
                '톤': '톤 (t)',
                '파운드': '파운드 (lb)',
                '온스': '온스 (oz)'
            },
            area: {
                '제곱미터': '제곱미터 (m²)',
                '제곱킬로미터': '제곱킬로미터 (km²)',
                '헥타르': '헥타르 (ha)',
                '제곱피트': '제곱피트 (ft²)',
                '제곱야드': '제곱야드 (yd²)',
                '에이커': '에이커 (ac)'
            },
            volume: {
                '세제곱미터': '세제곱미터 (m³)',
                '리터': '리터 (L)',
                '밀리리터': '밀리리터 (mL)',
                '갤런': '갤런 (gal)',
                '쿼트': '쿼트 (qt)',
                '파인트': '파인트 (pt)'
            },
            temperature: {
                '섭씨': '섭씨 (°C)',
                '화씨': '화씨 (°F)',
                '켈빈': '켈빈 (K)'
            },
            time: {
                '초': '초 (s)',
                '분': '분 (min)',
                '시간': '시간 (h)',
                '일': '일 (d)',
                '주': '주 (wk)',
                '년': '년 (yr)'
            },
            speed: {
                '미터/초': '미터/초 (m/s)',
                '킬로미터/시': '킬로미터/시 (km/h)',
                '마일/시': '마일/시 (mph)',
                '노트': '노트 (kn)'
            },
            dataSize: {
                '바이트': '바이트 (B)',
                '킬로바이트': '킬로바이트 (KB)',
                '메가바이트': '메가바이트 (MB)',
                '기가바이트': '기가바이트 (GB)',
                '테라바이트': '테라바이트 (TB)'
            },
            energy: {
                '줄': '줄 (J)',
                '킬로줄': '킬로줄 (kJ)',
                '칼로리': '칼로리 (cal)',
                '킬로칼로리': '킬로칼로리 (kcal)',
                '와트시': '와트시 (Wh)',
                '킬로와트시': '킬로와트시 (kWh)'
            },
            pressure: {
                '파스칼': '파스칼 (Pa)',
                '킬로파스칼': '킬로파스칼 (kPa)',
                '바': '바 (bar)',
                '대기압': '대기압 (atm)',
                '평방 인치 당 파운드(psi)': '평방 인치 당 파운드(psi)'
            },
            angle: {
                '도': '도 (°)',
                '라디안': '라디안 (rad)',
                '그라디안': '그라디안 (grad)'
            },
            frequency: {
                '헤르츠': '헤르츠 (Hz)',
                '킬로헤르츠': '킬로헤르츠 (kHz)',
                '메가헤르츠': '메가헤르츠 (MHz)',
                '기가헤르츠': '기가헤르츠 (GHz)'
            }
        }
    },
    en: {
        title: "Unit Converter",
        fromValue: "Value:",
        fromUnit: "Unit:",
        toUnit: "Convert To:",
        decimalPlaces: "Decimal Places:",
        placeholder: "Enter value",
        invalidNumber: "Please enter a valid number.",
        lengthButton: "Length",
        weightButton: "Weight",
        areaButton: "Area",
        volumeButton: "Volume",
        temperatureButton: "Temperature",
        timeButton: "Time",
        speedButton: "Speed",
        dataSizeButton: "Data Size",
        energyButton: "Energy",
        pressureButton: "Pressure",
        angleButton: "Angle",
        frequencyButton: "Frequency",
        units: {
            length: {
                '미터': 'Meter (m)',
                '킬로미터': 'Kilometer (km)',
                '센티미터': 'Centimeter (cm)',
                '밀리미터': 'Millimeter (mm)',
                '인치': 'Inch (in)',
                '피트': 'Foot (ft)',
                '야드': 'Yard (yd)',
                '마일': 'Mile (mi)',
                '마이크로미터': 'Micrometer (µm)',
                '나노미터': 'Nanometer (nm)',
                '해리': 'Nautical Mile (NM)',
                '퍼롱': 'Furlong (furlong)',
                '광년': 'Light Year (ly)',
                '천문단위': 'Astronomical Unit (AU)',
                '파섹': 'Parsec (pc)',
                '에렉트론': 'Cubit (cubit)',
                '링크': 'Link (lnk)',
                '체인': 'Chain (ch)',
                '로드': 'Rod (rd)',
                '폴': 'Pole (pole)',
                '퍼치': 'Perch (perch)'
            },
        weight: {
            '그램': 'Gram (g)',
            '킬로그램': 'Kilogram (kg)',
            '밀리그램': 'Milligram (mg)',
            '톤': 'Ton (t)',
            '파운드': 'Pound (lb)',
            '온스': 'Ounce (oz)'
        },
        area: {
            '제곱미터': 'Square meter (m²)',
            '제곱킬로미터': 'Square kilometer (km²)',
            '헥타르': 'Hectare (ha)',
            '제곱피트': 'Square foot (ft²)',
            '제곱야드': 'Square yard (yd²)',
            '에이커': 'Acre (ac)'
        },
        volume: {
            '세제곱미터': 'Cubic meter (m³)',
            '리터': 'Liter (L)',
            '밀리리터': 'Milliliter (mL)',
            '갤런': 'Gallon (gal)',
            '쿼트': 'Quart (qt)',
            '파인트': 'Pint (pt)'
        },
        temperature: {
            '섭씨': 'Celsius (°C)',
            '화씨': 'Fahrenheit (°F)',
            '켈빈': 'Kelvin (K)'
        },
        time: {
            '초': 'Second (s)',
            '분': 'Minute (min)',
            '시간': 'Hour (h)',
            '일': 'Day (d)',
            '주': 'Week (wk)',
            '년': 'Year (yr)'
        },
        speed: {
            '미터/초': 'Meter/second (m/s)',
            '킬로미터/시': 'Kilometer/hour (km/h)',
            '마일/시': 'Mile/hour (mph)',
            '노트': 'Knot (kn)'
        },
        dataSize: {
            '바이트': 'Byte (B)',
            '킬로바이트': 'Kilobyte (KB)',
            '메가바이트': 'Megabyte (MB)',
            '기가바이트': 'Gigabyte (GB)',
            '테라바이트': 'Terabyte (TB)'
        },
        energy: {
            '줄': 'Joule (J)',
            '킬로줄': 'Kilojoule (kJ)',
            '칼로리': 'Calorie (cal)',
            '킬로칼로리': 'Kilocalorie (kcal)',
            '와트시': 'Watt-hour (Wh)',
            '킬로와트시': 'Kilowatt-hour (kWh)'
        },
        pressure: {
            '파스칼': 'Pascal (Pa)',
            '킬로파스칼': 'Kilopascal (kPa)',
            '바': 'Bar (bar)',
            '대기압': 'Atmosphere (atm)',
            '평방 인치 당 파운드(psi)': 'PSI'
        },
        angle: {
            '도': 'Degree (°)',
            '라디안': 'Radian (rad)',
            '그라디안': 'Gradian (grad)'
        },
        frequency: {
            '헤르츠': 'Hertz (Hz)',
            '킬로헤르츠': 'Kilohertz (kHz)',
            '메가헤르츠': 'Megahertz (MHz)',
            '기가헤르츠': 'Gigahertz (GHz)'
        }
    }
},
    ja: {
        title: "単位変換器",
        fromValue: "値:",
        fromUnit: "単位:",
        toUnit: "変換先単位:",
        decimalPlaces: "小数点以下の桁数:",
        placeholder: "変換する値",
        invalidNumber: "有効な数字を入力してください。",
        lengthButton: "長さ",
        weightButton: "重さ",
        areaButton: "面積",
        volumeButton: "体積",
        temperatureButton: "温度",
        timeButton: "時間",
        speedButton: "速度",
        dataSizeButton: "データサイズ",
        energyButton: "エネルギー",
        pressureButton: "圧力",
        angleButton: "角度",
        frequencyButton: "周波数",
        units: {
            length: {
                '미터': 'メートル (m)',
                '킬로미터': 'キロメートル (km)',
                '센티미터': 'センチメートル (cm)',
                '밀리미터': 'ミリメートル (mm)',
                '인치': 'インチ (in)',
                '피트': 'フィート (ft)',
                '야드': 'ヤード (yd)',
                '마일': 'マイル (mi)',
                '마이크ロ미터': 'マイクロメートル (µm)',
                '나노미터': 'ナノメートル (nm)',
                '해리': '海里 (NM)',
                '퍼롱': 'ファーロング (furlong)',
                '광년': '光年 (ly)',
                '천문단위': '天文単位 (AU)',
                '파섹': 'パーセク (pc)',
                '에렉트론': 'キュービット (cubit)',
                '링크': 'リンク (lnk)',
                '체인': 'チェーン (ch)',
                '로드': 'ロッド (rd)',
                '폴': 'ポール (pole)',
                '퍼치': 'パーチ (perch)'
            },
            weight: {
                '그램': 'グラム (g)',
                '킬로그램': 'キログラム (kg)',
                '밀리그램': 'ミリグラム (mg)',
                '톤': 'トン (t)',
                '파운드': 'ポンド (lb)',
                '온스': 'オンス (oz)'
            },
            area: {
                '제곱미터': '平方メートル (m²)',
                '제곱킬로미터': '平方キロメートル (km²)',
                '헥타르': 'ヘクタール (ha)',
                '제곱피트': '平方フィート (ft²)',
                '제곱야드': '平方ヤード (yd²)',
                '에이커': 'エーカー (ac)'
            },
            volume: {
                '세제곱미터': '立方メートル (m³)',
                '리터': 'リットル (L)',
                '밀리리터': 'ミリリットル (mL)',
                '갤런': 'ガロン (gal)',
                '쿼트': 'クォート (qt)',
                '파인트': 'パイント (pt)'
            },
            temperature: {
                '섭씨': '摂氏 (°C)',
                '화씨': '華氏 (°F)',
                '켈빈': 'ケルビン (K)'
            },
            time: {
                '초': '秒 (s)',
                '분': '分 (min)',
                '시간': '時間 (h)',
                '일': '日 (d)',
                '주': '週 (wk)',
                '년': '年 (yr)'
            },
            speed: {
                '미터/초': 'メートル/秒 (m/s)',
                '킬로미터/시': 'キロメートル/時 (km/h)',
                '마일/시': 'マイル/時 (mph)',
                '노트': 'ノット (kn)'
            },
            dataSize: {
                '바이트': 'バイト (B)',
                '킬로바이트': 'キロバイト (KB)',
                '메가바이트': 'メガバイト (MB)',
                '기가바이트': 'ギガバイト (GB)',
                '테라바이트': 'テラバイト (TB)'
            },
            energy: {
                '줄': 'ジュール (J)',
                '킬로줄': 'キロジュール (kJ)',
                '칼로리': 'カロリー (cal)',
                '킬로칼로리': 'キロカロリー (kcal)',
                '와트시': 'ワット時 (Wh)',
                '킬로와트시': 'キロワット時 (kWh)'
            },
            pressure: {
                '파스칼': 'パスカル (Pa)',
                '킬로파스칼': 'キロパスカル (kPa)',
                '바': 'バール (bar)',
                '대기압': '気圧 (atm)',
                '평방 인치 당 파운드(psi)': 'ポンド毎平方インチ (psi)'
            },
            angle: {
                '도': '度 (°)',
                '라디안': 'ラジアン (rad)',
                '그라디안': 'グラジアン (grad)'
            },
            frequency: {
                '헤르츠': 'ヘルツ (Hz)',
                '킬로헤르츠': 'キロヘルツ (kHz)',
                '메가헤르츠': 'メガヘルツ (MHz)',
                '기가헤르츠': 'ギガヘルツ (GHz)'
        }
    }
},
    "es": {
        title: "Conversor de unidades",
        fromValue: "Valor:",
        fromUnit: "Unidad:",
        toUnit: "Convertir a:",
        decimalPlaces: "Decimales:",
        placeholder: "Introduzca el valor",
        invalidNumber: "Por favor, introduzca un número válido.",
        lengthButton: "Longitud",
        weightButton: "Peso",
        areaButton: "Superficie",
        volumeButton: "Volumen",
        temperatureButton: "Temperatura",
        timeButton: "Tiempo",
        speedButton: "Velocidad",
        dataSizeButton: "Tamaño de datos",
        energyButton: "Energía",
        pressureButton: "Presión",
        angleButton: "Ángulo",
        frequencyButton: "Frecuencia",
        units: {
            length: {
                '미터': 'Metro (m)',
                '킬로미터': 'Kilómetro (km)',
                '센티미터': 'Centímetro (cm)',
                '밀리미터': 'Milímetro (mm)',
                '인치': 'Pulgada (in)',
                '피트': 'Pie (ft)',
                '야드': 'Yarda (yd)',
                '마일': 'Milla (mi)',
                '마이크로미터': 'Micrómetro (µm)',
                '나노미터': 'Nanómetro (nm)',
                '해리': 'Milla náutica (NM)',
                '퍼롱': 'Furlong (furlong)',
                '광년': 'Año luz (ly)',
                '천문단위': 'Unidad astronómica (AU)',
                '파섹': 'Parsec (pc)',
                '에렉트론': 'Codo (cubit)',
                '링크': 'Link (lnk)',
                '체인': 'Cadena (ch)',
                '로드': 'Vara (rd)',
                '폴': 'Polo (pole)',
                '퍼치': 'Percha (perch)'
            },
            weight: {
                '그램': 'Gramo (g)',
                '킬로그램': 'Kilogramo (kg)',
                '밀리그램': 'Miligramo (mg)',
                '톤': 'Tonelada (t)',
                '파운드': 'Libra (lb)',
                '온스': 'Onza (oz)'
            },
            area: {
                '제곱미터': 'Metro cuadrado (m²)',
                '제곱킬로미터': 'Kilómetro cuadrado (km²)',
                '헥타르': 'Hectárea (ha)',
                '제곱피트': 'Pie cuadrado (ft²)',
                '제곱야드': 'Yarda cuadrada (yd²)',
                '에이커': 'Acre (ac)'
            },
            volume: {
                '세제곱미터': 'Metro cúbico (m³)',
                '리터': 'Litro (L)',
                '밀리리터': 'Mililitro (mL)',
                '갤런': 'Galón (gal)',
                '쿼트': 'Cuarto (qt)',
                '파인트': 'Pinta (pt)'
            },
            temperature: {
                '섭씨': 'Celsius (°C)',
                '화씨': 'Fahrenheit (°F)',
                '켈빈': 'Kelvin (K)'
            },
            time: {
                '초': 'Segundo (s)',
                '분': 'Minuto (min)',
                '시간': 'Hora (h)',
                '일': 'Día (d)',
                '주': 'Semana (sem)',
                '년': 'Año (año)'
            },
            speed: {
                '미터/초': 'Metro por segundo (m/s)',
                '킬로미터/시': 'Kilómetro por hora (km/h)',
                '마일/시': 'Milla por hora (mph)',
                '노트': 'Nudo (kn)'
            },
            dataSize: {
                '바이트': 'Byte (B)',
                '킬로바이트': 'Kilobyte (KB)',
                '메가바이트': 'Megabyte (MB)',
                '기가바이트': 'Gigabyte (GB)',
                '테라바이트': 'Terabyte (TB)'
            },
            energy: {
                '줄': 'Julio (J)',
                '킬로줄': 'Kilojulio (kJ)',
                '칼로리': 'Caloría (cal)',
                '킬로칼로리': 'Kilocaloría (kcal)',
                '와트시': 'Vatio-hora (Wh)',
                '킬로와트시': 'Kilovatio-hora (kWh)'
            },
            pressure: {
                '파스칼': 'Pascal (Pa)',
                '킬로파스칼': 'Kilopascal (kPa)',
                '바': 'Bar (bar)',
                '대기압': 'Atmósfera (atm)',
                '평방 인치 당 파운드(psi)': 'Libra por pulgada cuadrada (psi)'
            },
            angle: {
                '도': 'Grado (°)',
                '라디안': 'Radián (rad)',
                '그라디안': 'Gradián (grad)'
            },
            frequency: {
                '헤르츠': 'Hertz (Hz)',
                '킬로헤르츠': 'Kilohertz (kHz)',
                '메가헤르츠': 'Megahertz (MHz)',
                '기가헤르츠': 'Gigahertz (GHz)'
        }
    }
},
    de : {
        title: "Einheitenumrechner",
        fromValue: "Wert:",
        fromUnit: "Einheit:",
        toUnit: "Umrechnen in:",
        decimalPlaces: "Dezimalstellen:",
        placeholder: "Wert eingeben",
        invalidNumber: "Bitte geben Sie eine gültige Zahl ein.",
        lengthButton: "Länge",
        weightButton: "Gewicht",
        areaButton: "Fläche",
        volumeButton: "Volumen",
        temperatureButton: "Temperatur",
        timeButton: "Zeit",
        speedButton: "Geschwindigkeit",
        dataSizeButton: "Datengröße",
        energyButton: "Energie",
        pressureButton: "Druck",
        angleButton: "Winkel",
        frequencyButton: "Frequenz",
        units: {
            length: {
                '미터': 'Meter (m)',
                '킬로미터': 'Kilometer (km)',
                '센티미터': 'Zentimeter (cm)',
                '밀리미터': 'Millimeter (mm)',
                '인치': 'Zoll (in)',
                '피트': 'Fuß (ft)',
                '야드': 'Yard (yd)',
                '마일': 'Meile (mi)',
                '마이크로미터': 'Mikrometer (µm)',
                '나노미터': 'Nanometer (nm)',
                '해리': 'Seemeile (NM)',
                '퍼롱': 'Furlong (furlong)',
                '광년': 'Lichtjahr (ly)',
                '천문단위': 'Astronomische Einheit (AU)',
                '파섹': 'Parsec (pc)',
                '에렉트론': 'Ellen (cubit)',
                '링크': 'Kette (lnk)',
                '체인': 'Chain (ch)',
                '로드': 'Rute (rd)',
                '폴': 'Stange (pole)',
                '퍼치': 'Perch (perch)'
            },
            weight: {
                '그램': 'Gramm (g)',
                '킬로그램': 'Kilogramm (kg)',
                '밀리그램': 'Milligramm (mg)',
                '톤': 'Tonne (t)',
                '파운드': 'Pfund (lb)',
                '온스': 'Unze (oz)'
            },
            area: {
                '제곱미터': 'Quadratmeter (m²)',
                '제곱킬로미터': 'Quadratkilometer (km²)',
                '헥타르': 'Hektar (ha)',
                '제곱피트': 'Quadratfuß (ft²)',
                '제곱야드': 'Quadratyard (yd²)',
                '에이커': 'Acre (ac)'
            },
            volume: {
                '세제곱미터': 'Kubikmeter (m³)',
                '리터': 'Liter (L)',
                '밀리리터': 'Milliliter (mL)',
                '갤런': 'Gallone (gal)',
                '쿼트': 'Quart (qt)',
                '파인트': 'Pint (pt)'
            },
            temperature: {
                '섭씨': 'Celsius (°C)',
                '화씨': 'Fahrenheit (°F)',
                '켈빈': 'Kelvin (K)'
            },
            time: {
                '초': 'Sekunde (s)',
                '분': 'Minute (min)',
                '시간': 'Stunde (h)',
                '일': 'Tag (d)',
                '주': 'Woche (Wo)',
                '년': 'Jahr (J)'
            },
            speed: {
                '미터/초': 'Meter pro Sekunde (m/s)',
                '킬로미터/시': 'Kilometer pro Stunde (km/h)',
                '마일/시': 'Meilen pro Stunde (mph)',
                '노트': 'Knoten (kn)'
            },
            dataSize: {
                '바이트': 'Byte (B)',
                '킬로바이트': 'Kilobyte (KB)',
                '메가바이트': 'Megabyte (MB)',
                '기가바이트': 'Gigabyte (GB)',
                '테라바이트': 'Terabyte (TB)'
            },
            energy: {
                '줄': 'Joule (J)',
                '킬로줄': 'Kilojoule (kJ)',
                '칼로리': 'Kalorie (cal)',
                '킬로칼로리': 'Kilokalorie (kcal)',
                '와트시': 'Wattstunde (Wh)',
                '킬로와트시': 'Kilowattstunde (kWh)'
            },
            pressure: {
                '파스칼': 'Pascal (Pa)',
                '킬로파스칼': 'Kilopascal (kPa)',
                '바': 'Bar (bar)',
                '대기압': 'Atmosphäre (atm)',
                '평방 인치 당 파운드(psi)': 'Pfund pro Quadratzoll (psi)'
            },
            angle: {
                '도': 'Grad (°)',
                '라디안': 'Radiant (rad)',
                '그라디안': 'Gradient (grad)'
            },
            frequency: {
                '헤르츠': 'Hertz (Hz)',
                '킬로헤르츠': 'Kilohertz (kHz)',
                '메가헤르츠': 'Megahertz (MHz)',
                '기가헤르츠': 'Gigahertz (GHz)'
        }
    }
},
    fr : {
        title: "Convertisseur d'unités",
        fromValue: "Valeur :",
        fromUnit: "Unité :",
        toUnit: "Convertir en :",
        decimalPlaces: "Décimales :",
        placeholder: "Entrez une valeur",
        invalidNumber: "Veuillez entrer un nombre valide.",
        lengthButton: "Longueur",
        weightButton: "Poids",
        areaButton: "Surface",
        volumeButton: "Volume",
        temperatureButton: "Température",
        timeButton: "Temps",
        speedButton: "Vitesse",
        dataSizeButton: "Taille de données",
        energyButton: "Énergie",
        pressureButton: "Pression",
        angleButton: "Angle",
        frequencyButton: "Fréquence",
        units: {
            length: {
                '미터': 'Mètre (m)',
                '킬로미터': 'Kilomètre (km)',
                '센티미터': 'Centimètre (cm)',
                '밀리미터': 'Millimètre (mm)',
                '인치': 'Pouce (in)',
                '피트': 'Pied (ft)',
                '야드': 'Yard (yd)',
                '마일': 'Mille (mi)',
                '마이크로미터': 'Micromètre (µm)',
                '나노미터': 'Nanomètre (nm)',
                '해리': 'Mille marin (NM)',
                '퍼롱': 'Furlong (furlong)',
                '광년': 'Année-lumière (ly)',
                '천문단위': 'Unité astronomique (AU)',
                '파섹': 'Parsec (pc)',
                '에렉트론': 'Coudée (cubit)',
                '링크': 'Lien (lnk)',
                '체인': 'Chaîne (ch)',
                '로드': 'Perche (rd)',
                '폴': 'Poteau (pole)',
                '퍼치': 'Perche (perch)'
            },
            weight: {
                '그램': 'Gramme (g)',
                '킬로그램': 'Kilogramme (kg)',
                '밀리그램': 'Milligramme (mg)',
                '톤': 'Tonne (t)',
                '파운드': 'Livre (lb)',
                '온스': 'Once (oz)'
            },
            area: {
                '제곱미터': 'Mètre carré (m²)',
                '제곱킬로미터': 'Kilomètre carré (km²)',
                '헥타르': 'Hectare (ha)',
                '제곱피트': 'Pied carré (ft²)',
                '제곱야드': 'Yard carré (yd²)',
                '에이커': 'Acre (ac)'
            },
            volume: {
                '세제곱미터': 'Mètre cube (m³)',
                '리터': 'Litre (L)',
                '밀리리터': 'Millilitre (mL)',
                '갤런': 'Gallon (gal)',
                '쿼트': 'Quart (qt)',
                '파인트': 'Pinte (pt)'
            },
            temperature: {
                '섭씨': 'Celsius (°C)',
                '화씨': 'Fahrenheit (°F)',
                '켈빈': 'Kelvin (K)'
            },
            time: {
                '초': 'Seconde (s)',
                '분': 'Minute (min)',
                '시간': 'Heure (h)',
                '일': 'Jour (j)',
                '주': 'Semaine (sem)',
                '년': 'Année (an)'
            },
            speed: {
                '미터/초': 'Mètre par seconde (m/s)',
                '킬로미터/시': 'Kilomètre par heure (km/h)',
                '마일/시': 'Mille par heure (mph)',
                '노트': 'Nœud (kn)'
            },
            dataSize: {
                '바이트': 'Octet (B)',
                '킬로바이트': 'Kilooctet (KB)',
                '메가바이트': 'Mégaoctet (MB)',
                '기가바이트': 'Gigaoctet (GB)',
                '테라바이트': 'Téraoctet (TB)'
            },
            energy: {
                '줄': 'Joule (J)',
                '킬로줄': 'Kilojoule (kJ)',
                '칼로리': 'Calorie (cal)',
                '킬로칼로리': 'Kilocalorie (kcal)',
                '와트시': 'Watt-heure (Wh)',
                '킬로와트시': 'Kilowatt-heure (kWh)'
            },
            pressure: {
                '파스칼': 'Pascal (Pa)',
                '킬로파스칼': 'Kilopascal (kPa)',
                '바': 'Bar (bar)',
                '대기압': 'Atmosphère (atm)',
                '평방 인치 당 파운드(psi)': 'Livre par pouce carré (psi)'
            },
            angle: {
                '도': 'Degré (°)',
                '라디안': 'Radian (rad)',
                '그라디안': 'Grade (grad)'
            },
            frequency: {
                '헤르츠': 'Hertz (Hz)',
                '킬로헤르츠': 'Kilohertz (kHz)',
                '메가헤르츠': 'Mégahertz (MHz)',
                '기가헤르츠': 'Gigahertz (GHz)'
        }
    }
},
    ru : {
        title: "Конвертер единиц измерения",
        fromValue: "Значение:",
        fromUnit: "Единица измерения:",
        toUnit: "Перевести в:",
        decimalPlaces: "Десятичные знаки:",
        placeholder: "Введите значение",
        invalidNumber: "Пожалуйста, введите корректное число.",
        lengthButton: "Длина",
        weightButton: "Вес",
        areaButton: "Площадь",
        volumeButton: "Объем",
        temperatureButton: "Температура",
        timeButton: "Время",
        speedButton: "Скорость",
        dataSizeButton: "Размер данных",
        energyButton: "Энергия",
        pressureButton: "Давление",
        angleButton: "Угол",
        frequencyButton: "Частота",
        units: {
            length: {
                '미터': 'Метр (m)',
                '킬로미터': 'Километр (km)',
                '센티미터': 'Сантиметр (cm)',
                '밀리미터': 'Миллиметр (mm)',
                '인치': 'Дюйм (in)',
                '피트': 'Фут (ft)',
                '야드': 'Ярд (yd)',
                '마일': 'Миля (mi)',
                '마이크로미터': 'Микрометр (µm)',
                '나노미터': 'Нанометр (nm)',
                '해리': 'Морская миля (NM)',
                '퍼롱': 'Фарлонг (furlong)',
                '광년': 'Световой год (ly)',
                '천문단위': 'Астрономическая единица (AU)',
                '파섹': 'Парсек (pc)',
                '에렉트론': 'Локоть (cubit)',
                '링크': 'Линк (lnk)',
                '체인': 'Чейн (ch)',
                '로드': 'Род (rd)',
                '폴': 'Полюс (pole)',
                '퍼치': 'Перч (perch)'
            },
            weight: {
                '그램': 'Грамм (г)',
                '킬로그램': 'Килограмм (кг)',
                '밀리그램': 'Миллиграмм (мг)',
                '톤': 'Тонна (т)',
                '파운드': 'Фунт (lb)',
                '온스': 'Унция (oz)'
            },
            area: {
                '제곱미터': 'Квадратный метр (м²)',
                '제곱킬로미터': 'Квадратный километр (км²)',
                '헥타르': 'Гектар (га)',
                '제곱피트': 'Квадратный фут (ft²)',
                '제곱야드': 'Квадратный ярд (yd²)',
                '에이커': 'Акр (ac)'
            },
            volume: {
                '세제곱미터': 'Кубический метр (м³)',
                '리터': 'Литр (л)',
                '밀리리터': 'Миллилитр (мл)',
                '갤런': 'Галлон (gal)',
                '쿼트': 'Кварта (qt)',
                '파인트': 'Пинта (pt)'
            },
            temperature: {
                '섭씨': 'Цельсий (°C)',
                '화씨': 'Фаренгейт (°F)',
                '켈빈': 'Кельвин (K)'
            },
            time: {
                '초': 'Секунда (с)',
                '분': 'Минута (мин)',
                '시간': 'Час (ч)',
                '일': 'День (д)',
                '주': 'Неделя (нед)',
                '년': 'Год (г)'
            },
            speed: {
                '미터/초': 'Метр в секунду (м/с)',
                '킬로미터/시': 'Километр в час (км/ч)',
                '마일/시': 'Миля в час (mph)',
                '노트': 'Узел (kn)'
            },
            dataSize: {
                '바이트': 'Байт (B)',
                '킬로바이트': 'Килобайт (КБ)',
                '메가바이트': 'Мегабайт (МБ)',
                '기가바이트': 'Гигабайт (ГБ)',
                '테라바이트': 'Терабайт (ТБ)'
            },
            energy: {
                '줄': 'Джоуль (Дж)',
                '킬로줄': 'Килоджоуль (кДж)',
                '칼로리': 'Калория (кал)',
                '킬로칼로리': 'Килокалория (ккал)',
                '와트시': 'Ватт-час (Вт⋅ч)',
                '킬로와트시': 'Киловатт-час (кВт⋅ч)'
            },
            pressure: {
                '파스칼': 'Паскаль (Па)',
                '킬로파스칼': 'Килопаскаль (кПа)',
                '바': 'Бар (бар)',
                '대기압': 'Атмосфера (атм)',
                '평방 인치 당 파운드(psi)': 'Фунт на квадратный дюйм (psi)'
            },
            angle: {
                '도': 'Градус (°)',
                '라디안': 'Радиан (рад)',
                '그라디안': 'Град (град)'
            },
            frequency: {
                '헤르츠': 'Герц (Гц)',
                '킬로헤르츠': 'Килогерц (кГц)',
                '메가헤르츠': 'Мегагерц (МГц)',
                '기가헤르츠': 'Гигагерц (ГГц)'
        }
    }
},
    it : {
        title: "Convertitore di unità",
        fromValue: "Valore:",
        fromUnit: "Unità:",
        toUnit: "Convertire in:",
        decimalPlaces: "Decimali:",
        placeholder: "Inserisci un valore",
        invalidNumber: "Per favore, inserisci un numero valido.",
        lengthButton: "Lunghezza",
        weightButton: "Peso",
        areaButton: "Area",
        volumeButton: "Volume",
        temperatureButton: "Temperatura",
        timeButton: "Tempo",
        speedButton: "Velocità",
        dataSizeButton: "Dimensione dati",
        energyButton: "Energia",
        pressureButton: "Pressione",
        angleButton: "Angolo",
        frequencyButton: "Frequenza",
        units: {
            length: {
                '미터': 'Metro (m)',
                '킬로미터': 'Chilometro (km)',
                '센티미터': 'Centimetro (cm)',
                '밀리미터': 'Millimetro (mm)',
                '인치': 'Pollice (in)',
                '피트': 'Piede (ft)',
                '야드': 'Iarda (yd)',
                '마일': 'Miglio (mi)',
                '마이크로미터': 'Micrometro (µm)',
                '나노미터': 'Nanometro (nm)',
                '해리': 'Miglio nautico (NM)',
                '퍼롱': 'Furlong (furlong)',
                '광년': 'Anno luce (ly)',
                '천문단위': 'Unità astronomica (AU)',
                '파섹': 'Parsec (pc)',
                '에렉트론': 'Cubit (cubit)',
                '링크': 'Link (lnk)',
                '체인': 'Catena (ch)',
                '로드': 'Asta (rd)',
                '폴': 'Palo (pole)',
                '퍼치': 'Perch (perch)'
                },
            weight: {
                '그램': 'Grammo (g)',
                '킬로그램': 'Chilogrammo (kg)',
                '밀리그램': 'Milligrammo (mg)',
                '톤': 'Tonnellata (t)',
                '파운드': 'Libbra (lb)',
                '온스': 'Oncia (oz)'
            },
            area: {
                '제곱미터': 'Metro quadrato (m²)',
                '제곱킬로미터': 'Chilometro quadrato (km²)',
                '헥타르': 'Ettaro (ha)',
                '제곱피트': 'Piede quadrato (ft²)',
                '제곱야드': 'Iarda quadrata (yd²)',
                '에이커': 'Acro (ac)'
            },
            volume: {
                '세제곱미터': 'Metro cubo (m³)',
                '리터': 'Litro (L)',
                '밀리리터': 'Millilitro (mL)',
                '갤런': 'Gallone (gal)',
                '쿼트': 'Quarto (qt)',
                '파인트': 'Pinta (pt)'
            },
            temperature: {
                '섭씨': 'Celsius (°C)',
                '화씨': 'Fahrenheit (°F)',
                '켈빈': 'Kelvin (K)'
            },
            time: {
                '초': 'Secondo (s)',
                '분': 'Minuto (min)',
                '시간': 'Ora (h)',
                '일': 'Giorno (g)',
                '주': 'Settimana (sett)',
                '년': 'Anno (anno)'
            },
            speed: {
                '미터/초': 'Metri al secondo (m/s)',
                '킬로미터/시': 'Chilometri all\'ora (km/h)',
                '마일/시': 'Miglia all\'ora (mph)',
                '노트': 'Nodo (kn)'
            },
            dataSize: {
                '바이트': 'Byte (B)',
                '킬로바이트': 'Kilobyte (KB)',
                '메가바이트': 'Megabyte (MB)',
                '기가바이트': 'Gigabyte (GB)',
                '테라바이트': 'Terabyte (TB)'
            },
            energy: {
                '줄': 'Joule (J)',
                '킬로줄': 'Kilojoule (kJ)',
                '칼로리': 'Caloria (cal)',
                '킬로칼로리': 'Chilocaloria (kcal)',
                '와트시': 'Wattora (Wh)',
                '킬로와트시': 'Chilowattora (kWh)'
            },
            pressure: {
                '파스칼': 'Pascal (Pa)',
                '킬로파스칼': 'Chilopascal (kPa)',
                '바': 'Bar (bar)',
                '대기압': 'Atmosfera (atm)',
                '평방 인치 당 파운드(psi)': 'Libbre per pollice quadrato (psi)'
            },
            angle: {
                '도': 'Grado (°)',
                '라디안': 'Radiante (rad)',
                '그라디안': 'Gradiente (grad)'
            },
            frequency: {
                '헤르츠': 'Hertz (Hz)',
                '킬로헤르츠': 'Chilohertz (kHz)',
                '메가헤르츠': 'Megahertz (MHz)',
                '기가헤르츠': 'Gigahertz (GHz)'
        }
    }
},
    "pt-BR": {
        title: "Conversor de Unidades",
        fromValue: "Valor:",
        fromUnit: "Unidade:",
        toUnit: "Converter para:",
        decimalPlaces: "Casas decimais:",
        placeholder: "Digite um valor",
        invalidNumber: "Por favor, insira um número válido.",
        lengthButton: "Comprimento",
        weightButton: "Peso",
        areaButton: "Área",
        volumeButton: "Volume",
        temperatureButton: "Temperatura",
        timeButton: "Tempo",
        speedButton: "Velocidade",
        dataSizeButton: "Tamanho de Dados",
        energyButton: "Energia",
        pressureButton: "Pressão",
        angleButton: "Ângulo",
        frequencyButton: "Frequência",
        units: {
            length: {
                '미터': 'Metro (m)',
                '킬로미터': 'Quilômetro (km)',
                '센티미터': 'Centímetro (cm)',
                '밀리미터': 'Milímetro (mm)',
                '인치': 'Polegada (in)',
                '피트': 'Pé (ft)',
                '야드': 'Jarda (yd)',
                '마일': 'Milha (mi)',
                '마이크로미터': 'Micrômetro (µm)',
                '나노미터': 'Nanômetro (nm)',
                '해리': 'Milha náutica (NM)',
                '퍼롱': 'Furlong (furlong)',
                '광년': 'Ano-luz (ly)',
                '천문단위': 'Unidade Astronômica (AU)',
                '파섹': 'Parsec (pc)',
                '에렉트론': 'Cúbito (cubit)',
                '링크': 'Link (lnk)',
                '체인': 'Cadeia (ch)',
                '로드': 'Vara (rd)',
                '폴': 'Polo (pole)',
                '퍼치': 'Perche (perch)'
            },
            weight: {
                '그램': 'Grama (g)',
                '킬로그램': 'Quilograma (kg)',
                '밀리그램': 'Miligramas (mg)',
                '톤': 'Tonelada (t)',
                '파운드': 'Libra (lb)',
                '온스': 'Onça (oz)'
            },
            area: {
                '제곱미터': 'Metro quadrado (m²)',
                '제곱킬로미터': 'Quilômetro quadrado (km²)',
                '헥타르': 'Hectare (ha)',
                '제곱피트': 'Pé quadrado (ft²)',
                '제곱야드': 'Jarda quadrada (yd²)',
                '에이커': 'Acre (ac)'
            },
            volume: {
                '세제곱미터': 'Metro cúbico (m³)',
                '리터': 'Litro (L)',
                '밀리리터': 'Mililitro (mL)',
                '갤런': 'Galão (gal)',
                '쿼트': 'Quartilho (qt)',
                '파인트': 'Pinta (pt)'
            },
            temperature: {
                '섭씨': 'Celsius (°C)',
                '화씨': 'Fahrenheit (°F)',
                '켈빈': 'Kelvin (K)'
            },
            time: {
                '초': 'Segundo (s)',
                '분': 'Minuto (min)',
                '시간': 'Hora (h)',
                '일': 'Dia (d)',
                '주': 'Semana (wk)',
                '년': 'Ano (yr)'
            },
            speed: {
                '미터/초': 'Metros por segundo (m/s)',
                '킬로미터/시': 'Quilômetros por hora (km/h)',
                '마일/시': 'Milhas por hora (mph)',
                '노트': 'Nó (kn)'
            },
            dataSize: {
                '바이트': 'Byte (B)',
                '킬로바이트': 'Kilobyte (KB)',
                '메가바이트': 'Megabyte (MB)',
                '기가바이트': 'Gigabyte (GB)',
                '테라바이트': 'Terabyte (TB)'
            },
            energy: {
                '줄': 'Joule (J)',
                '킬로줄': 'Quilojoule (kJ)',
                '칼로리': 'Caloria (cal)',
                '킬로칼로리': 'Quilocaloria (kcal)',
                '와트시': 'Watt-hora (Wh)',
                '킬로와트시': 'Quilowatt-hora (kWh)'
            },
            pressure: {
                '파스칼': 'Pascal (Pa)',
                '킬로파스칼': 'Quilopascal (kPa)',
                '바': 'Bar (bar)',
                '대기압': 'Atmosfera (atm)',
                '평방 인치 당 파운드(psi)': 'Libra por polegada quadrada (psi)'
            },
            angle: {
                '도': 'Grau (°)',
                '라디안': 'Radiano (rad)',
                '그라디안': 'Gradian (grad)'
            },
            frequency: {
                '헤르츠': 'Hertz (Hz)',
                '킬로헤르츠': 'Quilohertz (kHz)',
                '메가헤르츠': 'Megahertz (MHz)',
                '기가헤르츠': 'Gigahertz (GHz)'
        }
    }
},
    id: {
        title: "Konverter Satuan",
        fromValue: "Nilai:",
        fromUnit: "Satuan:",
        toUnit: "Konversi ke:",
        decimalPlaces: "Tempat desimal:",
        placeholder: "Masukkan nilai",
        invalidNumber: "Silakan masukkan angka yang valid.",
        lengthButton: "Panjang",
        weightButton: "Berat",
        areaButton: "Area",
        volumeButton: "Volume",
        temperatureButton: "Suhu",
        timeButton: "Waktu",
        speedButton: "Kecepatan",
        dataSizeButton: "Ukuran Data",
        energyButton: "Energi",
        pressureButton: "Tekanan",
        angleButton: "Sudut",
        frequencyButton: "Frekuensi",
        units: {
            length: {
                '미터': 'Meter (m)',
                '킬로미터': 'Kilometer (km)',
                '센티미터': 'Sentimeter (cm)',
                '밀리미터': 'Milimeter (mm)',
                '인치': 'Inci (in)',
                '피트': 'Kaki (ft)',
                '야드': 'Yard (yd)',
                '마일': 'Mil (mi)',
                '마이크로미터': 'Mikrometer (µm)',
                '나노미터': 'Nanometer (nm)',
                '해리': 'Mil laut (NM)',
                '퍼롱': 'Furlong (furlong)',
                '광년': 'Tahun cahaya (ly)',
                '천문단위': 'Satuan Astronomi (AU)',
                '파섹': 'Parsek (pc)',
                '에렉트론': 'Kubik (cubit)',
                '링크': 'Link (lnk)',
                '체인': 'Rantai (ch)',
                '로드': 'Rod (rd)',
                '폴': 'Pole (pole)',
                '퍼치': 'Perch (perch)'
            },
            weight: {
                '그램': 'Gram (g)',
                '킬로그램': 'Kilogram (kg)',
                '밀리그램': 'Miligram (mg)',
                '톤': 'Ton (t)',
                '파운드': 'Pound (lb)',
                '온스': 'Ons (oz)'
            },
            area: {
                '제곱미터': 'Meter persegi (m²)',
                '제곱킬로미터': 'Kilometer persegi (km²)',
                '헥타르': 'Hektar (ha)',
                '제곱피트': 'Kaki persegi (ft²)',
                '제곱야드': 'Yard persegi (yd²)',
                '에이커': 'Acre (ac)'
            },
            volume: {
                '세제곱미터': 'Meter kubik (m³)',
                '리터': 'Liter (L)',
                '밀리리터': 'Mililiter (mL)',
                '갤런': 'Galon (gal)',
                '쿼트': 'Kuart (qt)',
                '파인트': 'Pint (pt)'
            },
            temperature: {
                '섭씨': 'Celsius (°C)',
                '화씨': 'Fahrenheit (°F)',
                '켈빈': 'Kelvin (K)'
            },
            time: {
                '초': 'Detik (s)',
                '분': 'Menit (min)',
                '시간': 'Jam (h)',
                '일': 'Hari (d)',
                '주': 'Minggu (wk)',
                '년': 'Tahun (yr)'
            },
            speed: {
                '미터/초': 'Meter per detik (m/s)',
                '킬로미터/시': 'Kilometer per jam (km/h)',
                '마일/시': 'Mil per jam (mph)',
                '노트': 'Knot (kn)'
            },
            dataSize: {
                '바이트': 'Byte (B)',
                '킬로바이트': 'Kilobyte (KB)',
                '메가바이트': 'Megabyte (MB)',
                '기가바이트': 'Gigabyte (GB)',
                '테라바이트': 'Terabyte (TB)'
            },
            energy: {
                '줄': 'Joule (J)',
                '킬로줄': 'Kilojoule (kJ)',
                '칼로리': 'Kalori (cal)',
                '킬로칼로리': 'Kilokalori (kcal)',
                '와트시': 'Watt-jam (Wh)',
                '킬로와트시': 'Kilowatt-jam (kWh)'
            },
            pressure: {
                '파스칼': 'Pascal (Pa)',
                '킬로파스칼': 'Kilopascal (kPa)',
                '바': 'Bar (bar)',
                '대기압': 'Atmosfer (atm)',
                '평방 인치 당 파운드(psi)': 'Pound per inci persegi (psi)'
            },
            angle: {
                '도': 'Derajat (°)',
                '라디안': 'Radian (rad)',
                '그라디안': 'Gradian (grad)'
            },
            frequency: {
                '헤르츠': 'Hertz (Hz)',
                '킬로헤르츠': 'Kilohertz (kHz)',
                '메가헤르츠': 'Megahertz (MHz)',
                '기가헤르츠': 'Gigahertz (GHz)'
        }
    }
},
    "zh-CN": {
        title: "单位转换器",
        fromValue: "值:",
        fromUnit: "单位:",
        toUnit: "转换为:",
        decimalPlaces: "小数位数:",
        placeholder: "输入值",
        invalidNumber: "请输入有效的数字。",
        lengthButton: "长度",
        weightButton: "重量",
        areaButton: "面积",
        volumeButton: "体积",
        temperatureButton: "温度",
        timeButton: "时间",
        speedButton: "速度",
        dataSizeButton: "数据大小",
        energyButton: "能量",
        pressureButton: "压力",
        angleButton: "角度",
        frequencyButton: "频率",
        units: {
            length: {
                '미터': '米 (m)',
                '킬로미터': '千米 (km)',
                '센티미터': '厘米 (cm)',
                '밀리미터': '毫米 (mm)',
                '인치': '英寸 (in)',
                '피트': '英尺 (ft)',
                '야드': '码 (yd)',
                '마일': '英里 (mi)',
                '마이크로미터': '微米 (µm)',
                '나노미터': '纳米 (nm)',
                '해리': '海里 (NM)',
                '퍼롱': '弗隆 (furlong)',
                '광년': '光年 (ly)',
                '천문단위': '天文单位 (AU)',
                '파섹': '秒差距 (pc)',
                '에렉트론': '臂尺 (cubit)',
                '링크': '链环 (lnk)',
                '체인': '链 (ch)',
                '로드': '杆 (rd)',
                '폴': '杆 (pole)',
                '퍼치': '杆 (perch)'
            },
            weight: {
                '그램': '克 (g)',
                '킬로그램': '千克 (kg)',
                '밀리그램': '毫克 (mg)',
                '톤': '吨 (t)',
                '파운드': '磅 (lb)',
                '온스': '盎司 (oz)'
            },
            area: {
                '제곱미터': '平方米 (m²)',
                '제곱킬로미터': '平方千米 (km²)',
                '헥타르': '公顷 (ha)',
                '제곱피트': '平方英尺 (ft²)',
                '제곱야드': '平方码 (yd²)',
                '에이커': '英亩 (ac)'
            },
            volume: {
                '세제곱미터': '立方米 (m³)',
                '리터': '升 (L)',
                '밀리리터': '毫升 (mL)',
                '갤런': '加仑 (gal)',
                '쿼트': '夸脱 (qt)',
                '파인트': '品脱 (pt)'
            },
            temperature: {
                '섭씨': '摄氏度 (°C)',
                '화씨': '华氏度 (°F)',
                '켈빈': '开尔文 (K)'
            },
            time: {
                '초': '秒 (s)',
                '분': '分钟 (min)',
                '시간': '小时 (h)',
                '일': '天 (d)',
                '주': '周 (wk)',
                '년': '年 (yr)'
            },
            speed: {
                '미터/초': '米每秒 (m/s)',
                '킬로미터/시': '千米每小时 (km/h)',
                '마일/시': '英里每小时 (mph)',
                '노트': '节 (kn)'
            },
            dataSize: {
                '바이트': '字节 (B)',
                '킬로바이트': '千字节 (KB)',
                '메가바이트': '兆字节 (MB)',
                '기가바이트': '吉字节 (GB)',
                '테라바이트': '太字节 (TB)'
            },
            energy: {
                '줄': '焦耳 (J)',
                '킬로줄': '千焦耳 (kJ)',
                '칼로리': '卡路里 (cal)',
                '킬로칼로리': '千卡路里 (kcal)',
                '와트시': '瓦时 (Wh)',
                '킬로와트시': '千瓦时 (kWh)'
            },
            pressure: {
                '파스칼': '帕斯卡 (Pa)',
                '킬로파스칼': '千帕斯卡 (kPa)',
                '바': '巴 (bar)',
                '대기압': '大气压 (atm)',
                '평방 인치 당 파운드(psi)': '磅每平方英寸 (psi)'
            },
            angle: {
                '도': '度 (°)',
                '라디안': '弧度 (rad)',
                '그라디안': '百分度 (grad)'
            },
            frequency: {
                '헤르츠': '赫兹 (Hz)',
                '킬로헤르츠': '千赫兹 (kHz)',
                '메가헤르츠': '兆赫兹 (MHz)',
                '기가헤르츠': '吉赫兹 (GHz)'
        }
    }
},
    ar: {
        title: "محول الوحدات",
        fromValue: "القيمة:",
        fromUnit: "الوحدة:",
        toUnit: "تحويل إلى:",
        decimalPlaces: "الأماكن العشرية:",
        placeholder: "أدخل القيمة",
        invalidNumber: "يرجى إدخال رقم صحيح.",
        lengthButton: "الطول",
        weightButton: "الوزن",
        areaButton: "المساحة",
        volumeButton: "الحجم",
        temperatureButton: "درجة الحرارة",
        timeButton: "الوقت",
        speedButton: "السرعة",
        dataSizeButton: "حجم البيانات",
        energyButton: "الطاقة",
        pressureButton: "الضغط",
        angleButton: "الزاوية",
        frequencyButton: "التردد",
        units: {
            length: {
                '미터': 'متر (m)',
                '킬로미터': 'كيلومتر (km)',
                '센티미터': 'سنتيمتر (cm)',
                '밀리미터': 'ميليمتر (mm)',
                '인치': 'بوصة (in)',
                '피트': 'قدم (ft)',
                '야드': 'ياردة (yd)',
                '마일': 'ميل (mi)',
                '마이크로미터': 'ميكرومتر (µm)',
                '나노미터': 'نانومتر (nm)',
                '해리': 'ميل بحري (NM)',
                '퍼롱': 'فرلنغ (furlong)',
                '광년': 'سنة ضوئية (ly)',
                '천문단위': 'وحدة فلكية (AU)',
                '파섹': 'فرسخ فلكي (pc)',
                '에렉트론': 'كيوبت (cubit)',
                '링크': 'لينك (lnk)',
                '체인': 'سلسلة (ch)',
                '로드': 'عمود (rd)',
                '폴': 'عمود (pole)',
                '퍼치': 'عمود (perch)'
            },
            weight: {
                '그램': 'جرام (g)',
                '킬로그램': 'كيلوجرام (kg)',
                '밀리그램': 'ميليجرام (mg)',
                '톤': 'طن (t)',
                '파운드': 'رطل (lb)',
                '온스': 'أوقية (oz)'
            },
            area: {
                '제곱미터': 'متر مربع (m²)',
                '제곱킬로미터': 'كيلومتر مربع (km²)',
                '헥타르': 'هكتار (ha)',
                '제곱피트': 'قدم مربع (ft²)',
                '제곱야드': 'ياردة مربعة (yd²)',
                '에이커': 'فدان (ac)'
            },
            volume: {
                '세제곱미터': 'متر مكعب (m³)',
                '리터': 'لتر (L)',
                '밀리리터': 'ميليلتر (mL)',
                '갤런': 'جالون (gal)',
                '쿼트': 'كوارت (qt)',
                '파인트': 'باينت (pt)'
            },
            temperature: {
                '섭씨': 'درجة مئوية (°C)',
                '화씨': 'درجة فهرنهايت (°F)',
                '켈빈': 'كلفن (K)'
            },
            time: {
                '초': 'ثانية (s)',
                '분': 'دقيقة (min)',
                '시간': 'ساعة (h)',
                '일': 'يوم (d)',
                '주': 'أسبوع (wk)',
                '년': 'سنة (yr)'
            },
            speed: {
                '미터/초': 'متر في الثانية (m/s)',
                '킬로미터/시': 'كيلومتر في الساعة (km/h)',
                '마일/시': 'ميل في الساعة (mph)',
                '노트': 'عقدة (kn)'
            },
            dataSize: {
                '바이트': 'بايت (B)',
                '킬로바이트': 'كيلوبايت (KB)',
                '메가바이트': 'ميجابايت (MB)',
                '기가바이트': 'جيجابايت (GB)',
                '테라바이트': 'تيرابايت (TB)'
            },
            energy: {
                '줄': 'جول (J)',
                '킬로줄': 'كيلوجول (kJ)',
                '칼로리': 'سعرة حرارية (cal)',
                '킬로칼로리': 'كيلو سعرة حرارية (kcal)',
                '와트시': 'واط ساعة (Wh)',
                '킬로와트시': 'كيلوواط ساعة (kWh)'
            },
            pressure: {
                '파스칼': 'باسكال (Pa)',
                '킬로파스칼': 'كيلوباسكال (kPa)',
                '바': 'بار (bar)',
                '대기압': 'الضغط الجوي (atm)',
                '평방 인치 당 파운드(psi)': 'رطل لكل بوصة مربعة (psi)'
            },
            angle: {
                '도': 'درجة (°)',
                '라디안': 'راديان (rad)',
                '그라디안': 'غراديان (grad)'
            },
            frequency: {
                '헤르츠': 'هرتز (Hz)',
                '킬로헤르츠': 'كيلوهرتز (kHz)',
                '메가헤르츠': 'ميجاهرتز (MHz)',
                '기가헤르츠': 'جيجاهرتز (GHz)'
        }
    }
},
    vi: {
        title: "Bộ Chuyển Đổi Đơn Vị",
        fromValue: "Giá trị:",
        fromUnit: "Đơn vị:",
        toUnit: "Chuyển đổi sang:",
        decimalPlaces: "Số thập phân:",
        placeholder: "Nhập giá trị",
        invalidNumber: "Vui lòng nhập một số hợp lệ.",
        lengthButton: "Chiều dài",
        weightButton: "Khối lượng",
        areaButton: "Diện tích",
        volumeButton: "Thể tích",
        temperatureButton: "Nhiệt độ",
        timeButton: "Thời gian",
        speedButton: "Tốc độ",
        dataSizeButton: "Kích thước dữ liệu",
        energyButton: "Năng lượng",
        pressureButton: "Áp suất",
        angleButton: "Góc",
        frequencyButton: "Tần số",
        units: {
            length: {
                '미터': 'Mét (m)',
                '킬로미터': 'Kilômét (km)',
                '센티미터': 'Xentimét (cm)',
                '밀리미터': 'Milimét (mm)',
                '인치': 'Inch (in)',
                '피트': 'Feet (ft)',
                '야드': 'Yard (yd)',
                '마일': 'Dặm (mi)',
                '마이크로미터': 'Micrômét (µm)',
                '나노미터': 'Nanomét (nm)',
                '해리': 'Hải lý (NM)',
                '퍼롱': 'Furlong (furlong)',
                '광년': 'Năm ánh sáng (ly)',
                '천문단위': 'Đơn vị thiên văn (AU)',
                '파섹': 'Parsec (pc)',
                '에렉트론': 'Cubit (cubit)',
                '링크': 'Liên kết (lnk)',
                '체인': 'Chuỗi (ch)',
                '로드': 'Gậy (rd)',
                '폴': 'Gậy (pole)',
                '퍼치': 'Gậy (perch)'
            },
            weight: {
                '그램': 'Gram (g)',
                '킬로그램': 'Kilôgam (kg)',
                '밀리그램': 'Miligram (mg)',
                '톤': 'Tấn (t)',
                '파운드': 'Pound (lb)',
                '온스': 'Ounce (oz)'
            },
            area: {
                '제곱미터': 'Mét vuông (m²)',
                '제곱킬로미터': 'Kilômét vuông (km²)',
                '헥타르': 'Hecta (ha)',
                '제곱피트': 'Feet vuông (ft²)',
                '제곱야드': 'Yard vuông (yd²)',
                '에이커': 'Mẫu Anh (ac)'
            },
            volume: {
                '세제곱미터': 'Mét khối (m³)',
                '리터': 'Lít (L)',
                '밀리리터': 'Mililít (mL)',
                '갤런': 'Gallon (gal)',
                '쿼트': 'Quart (qt)',
                '파인트': 'Pint (pt)'
            },
            temperature: {
                '섭씨': 'Celsius (°C)',
                '화씨': 'Fahrenheit (°F)',
                '켈빈': 'Kelvin (K)'
            },
            time: {
                '초': 'Giây (s)',
                '분': 'Phút (min)',
                '시간': 'Giờ (h)',
                '일': 'Ngày (d)',
                '주': 'Tuần (wk)',
                '년': 'Năm (yr)'
            },
            speed: {
                '미터/초': 'Mét trên giây (m/s)',
                '킬로미터/시': 'Kilômét trên giờ (km/h)',
                '마일/시': 'Dặm trên giờ (mph)',
                '노트': 'Hải lý trên giờ (kn)'
            },
            dataSize: {
                '바이트': 'Byte (B)',
                '킬로바이트': 'Kilobyte (KB)',
                '메가바이트': 'Megabyte (MB)',
                '기가바이트': 'Gigabyte (GB)',
                '테라바이트': 'Terabyte (TB)'
            },
            energy: {
                '줄': 'Joule (J)',
                '킬로줄': 'Kilojoule (kJ)',
                '칼로리': 'Calo (cal)',
                '킬로칼로리': 'Kilocalo (kcal)',
                '와트시': 'Watt-giờ (Wh)',
                '킬로와트시': 'Kilowatt-giờ (kWh)'
            },
            pressure: {
                '파스칼': 'Pascal (Pa)',
                '킬로파스칼': 'Kilopascal (kPa)',
                '바': 'Thanh (bar)',
                '대기압': 'Áp suất khí quyển (atm)',
                '평방 인치 당 파운드(psi)': 'Pound trên inch vuông (psi)'
            },
            angle: {
                '도': 'Độ (°)',
                '라디안': 'Radian (rad)',
                '그라디안': 'Gradian (grad)'
            },
            frequency: {
                '헤르츠': 'Hertz (Hz)',
                '킬로헤르츠': 'Kilohertz (kHz)',
                '메가헤르츠': 'Megahertz (MHz)',
                '기가헤르츠': 'Gigahertz (GHz)'
        }
    }
},
    uk: {
        title: "Конвертер одиниць",
        fromValue: "Значення:",
        fromUnit: "Одиниця:",
        toUnit: "Перетворити в:",
        decimalPlaces: "Десяткові знаки:",
        placeholder: "Введіть значення",
        invalidNumber: "Будь ласка, введіть дійсне число.",
        lengthButton: "Довжина",
        weightButton: "Вага",
        areaButton: "Площа",
        volumeButton: "Обсяг",
        temperatureButton: "Температура",
        timeButton: "Час",
        speedButton: "Швидкість",
        dataSizeButton: "Розмір даних",
        energyButton: "Енергія",
        pressureButton: "Тиск",
        angleButton: "Кут",
        frequencyButton: "Частота",
        units: {
            length: {
                '미터': 'Метр (m)',
                '킬로미터': 'Кілометр (km)',
                '센티미터': 'Сантиметр (cm)',
                '밀리미터': 'Міліметр (mm)',
                '인치': 'Дюйм (in)',
                '피트': 'Фут (ft)',
                '야드': 'Ярд (yd)',
                '마일': 'Миля (mi)',
                '마이크로미터': 'Мікрометр (µm)',
                '나노미터': 'Нанометр (nm)',
                '해리': 'Морська миля (NM)',
                '퍼롱': 'Фурлонг (furlong)',
                '광년': 'Світловий рік (ly)',
                '천문단위': 'Астрономічна одиниця (AU)',
                '파섹': 'Парсек (pc)',
                '에렉트론': 'Кубіт (cubit)',
                '링크': 'Лінк (lnk)',
                '체인': 'Ланцюг (ch)',
                '로드': 'Род (rd)',
                '폴': 'Полюс (pole)',
                '퍼치': 'Полюс (perch)'
            },
            weight: {
                '그램': 'Грам (g)',
                '킬로그램': 'Кілограм (kg)',
                '밀리그램': 'Міліграм (mg)',
                '톤': 'Тонна (t)',
                '파운드': 'Фунт (lb)',
                '온스': 'Унція (oz)'
            },
            area: {
                '제곱미터': 'Квадратний метр (m²)',
                '제곱킬로미터': 'Квадратний кілометр (km²)',
                '헥타르': 'Гектар (ha)',
                '제곱피트': 'Квадратний фут (ft²)',
                '제곱야드': 'Квадратний ярд (yd²)',
                '에이커': 'Акр (ac)'
            },
            volume: {
                '세제곱미터': 'Кубічний метр (m³)',
                '리터': 'Літр (L)',
                '밀리리터': 'Мілілітр (mL)',
                '갤런': 'Галон (gal)',
                '쿼트': 'Кварта (qt)',
                '파인트': 'Пінта (pt)'
            },
            temperature: {
                '섭씨': 'Цельсій (°C)',
                '화씨': 'Фаренгейт (°F)',
                '켈빈': 'Кельвін (K)'
            },
            time: {
                '초': 'Секунда (s)',
                '분': 'Хвилина (min)',
                '시간': 'Година (h)',
                '일': 'День (d)',
                '주': 'Тиждень (wk)',
                '년': 'Рік (yr)'
            },
            speed: {
                '미터/초': 'Метри за секунду (m/s)',
                '킬로미터/시': 'Кілометри на годину (km/h)',
                '마일/시': 'Милі на годину (mph)',
                '노트': 'Вузол (kn)'
            },
            dataSize: {
                '바이트': 'Байт (B)',
                '킬로바이트': 'Кілобайт (KB)',
                '메가바이트': 'Мегабайт (MB)',
                '기가바이트': 'Гігабайт (GB)',
                '테라바이트': 'Терабайт (TB)'
            },
            energy: {
                '줄': 'Джоуль (J)',
                '킬로줄': 'Кілоджоуль (kJ)',
                '칼로리': 'Калорія (cal)',
                '킬로칼로리': 'Кілокалорія (kcal)',
                '와트시': 'Ват-година (Wh)',
                '킬로와트시': 'Кіловат-година (kWh)'
            },
            pressure: {
                '파스칼': 'Паскаль (Pa)',
                '킬로파스칼': 'Кілопаскаль (kPa)',
                '바': 'Бар (bar)',
                '대기압': 'Атмосферний тиск (atm)',
                '평방 인치 당 파운드(psi)': 'Фунт на квадратний дюйм (psi)'
            },
            angle: {
                '도': 'Градус (°)',
                '라디안': 'Радіан (rad)',
                '그라디안': 'Градіан (grad)'
            },
            frequency: {
                '헤르츠': 'Герц (Hz)',
                '킬로헤르츠': 'Кілогерц (kHz)',
                '메가헤르츠': 'Мегагерц (MHz)',
                '기가헤르츠': 'Гігагерц (GHz)'
        }
    }
},
    tr: {
        title: "Birim Dönüştürücü",
        fromValue: "Değer:",
        fromUnit: "Birim:",
        toUnit: "Dönüştürülecek birim:",
        decimalPlaces: "Ondalık basamaklar:",
        placeholder: "Değeri girin",
        invalidNumber: "Lütfen geçerli bir sayı girin.",
        lengthButton: "Uzunluk",
        weightButton: "Ağırlık",
        areaButton: "Alan",
        volumeButton: "Hacim",
        temperatureButton: "Sıcaklık",
        timeButton: "Zaman",
        speedButton: "Hız",
        dataSizeButton: "Veri Boyutu",
        energyButton: "Enerji",
        pressureButton: "Basınç",
        angleButton: "Açı",
        frequencyButton: "Frekans",
        units: {
            length: {
                '미터': 'Metre (m)',
                '킬로미터': 'Kilometre (km)',
                '센티미터': 'Santimetre (cm)',
                '밀리미터': 'Milimetre (mm)',
                '인치': 'İnç (in)',
                '피트': 'Fit (ft)',
                '야드': 'Yarda (yd)',
                '마일': 'Mil (mi)',
                '마이크로미터': 'Mikrometre (µm)',
                '나노미터': 'Nanometre (nm)',
                '해리': 'Deniz mili (NM)',
                '퍼롱': 'Furlong (furlong)',
                '광년': 'Işık yılı (ly)',
                '천문단위': 'Astronomik birim (AU)',
                '파섹': 'Parsek (pc)',
                '에렉트론': 'Kubik (cubit)',
                '링크': 'Link (lnk)',
                '체인': 'Zincir (ch)',
                '로드': 'Çubuk (rd)',
                '폴': 'Direk (pole)',
                '퍼치': 'Perch (perch)'
            },
            weight: {
                '그램': 'Gram (g)',
                '킬로그램': 'Kilogram (kg)',
                '밀리그램': 'Miligram (mg)',
                '톤': 'Ton (t)',
                '파운드': 'Pound (lb)',
                '온스': 'Ons (oz)'
            },
            area: {
                '제곱미터': 'Metrekare (m²)',
                '제곱킬로미터': 'Kilometrekare (km²)',
                '헥타르': 'Hektar (ha)',
                '제곱피트': 'Fitkare (ft²)',
                '제곱야드': 'Yardakare (yd²)',
                '에이커': 'Akre (ac)'
            },
            volume: {
                '세제곱미터': 'Metreküp (m³)',
                '리터': 'Litre (L)',
                '밀리리터': 'Mililitre (mL)',
                '갤런': 'Galon (gal)',
                '쿼트': 'Quart (qt)',
                '파인트': 'Pint (pt)'
            },
            temperature: {
                '섭씨': 'Santigrat (°C)',
                '화씨': 'Fahrenheit (°F)',
                '켈빈': 'Kelvin (K)'
            },
            time: {
                '초': 'Saniye (s)',
                '분': 'Dakika (min)',
                '시간': 'Saat (h)',
                '일': 'Gün (d)',
                '주': 'Hafta (wk)',
                '년': 'Yıl (yr)'
            },
            speed: {
                '미터/초': 'Metre/saniye (m/s)',
                '킬로미터/시': 'Kilometre/saat (km/h)',
                '마일/시': 'Mil/saat (mph)',
                '노트': 'Knot (kn)'
            },
            dataSize: {
                '바이트': 'Bayt (B)',
                '킬로바이트': 'Kilobayt (KB)',
                '메가바이트': 'Megabayt (MB)',
                '기가바이트': 'Gigabayt (GB)',
                '테라바이트': 'Terabayt (TB)'
            },
            energy: {
                '줄': 'Jul (J)',
                '킬로줄': 'Kilojul (kJ)',
                '칼로리': 'Kalori (cal)',
                '킬로칼로리': 'Kilokalori (kcal)',
                '와트시': 'Watt-saat (Wh)',
                '킬로와트시': 'Kilowatt-saat (kWh)'
            },
            pressure: {
                '파스칼': 'Pascal (Pa)',
                '킬로파스칼': 'Kilopascal (kPa)',
                '바': 'Bar (bar)',
                '대기압': 'Atmosfer basıncı (atm)',
                '평방 인치 당 파운드(psi)': 'İnç kare başına pound (psi)'
            },
            angle: {
                '도': 'Derece (°)',
                '라디안': 'Radyan (rad)',
                '그라디안': 'Gradyan (grad)'
            },
            frequency: {
                '헤르츠': 'Hertz (Hz)',
                '킬로헤르츠': 'Kilohertz (kHz)',
                '메가헤르츠': 'Megahertz (MHz)',
                '기가헤르츠': 'Gigahertz (GHz)'
        }
    }
}

};
const conversionRates = { //단위 추가 시 작업
    length: {
        '미터': 1,
        '킬로미터': 0.001,
        '센티미터': 100,
        '밀리미터': 1000,
        '인치': 39.3701,
        '피트': 3.28084,
        '야드': 1.09361,
        '마일': 0.000621371,
        '마이크로미터': 1000000,
        '나노미터': 1000000000,
        '해리': 0.000539957,
        '퍼롱': 0.00497096,
        '광년': 1.057e-16,
        '천문단위': 6.6846e-12,
        '파섹': 3.24078e-17,
        '에렉트론': 2.18723,
        '링크': 4.97096,
        '체인': 0.0497097,
        '로드': 0.198839,
        '폴': 0.198839,
        '퍼치': 0.198839
    },
    weight: {
        '그램': 1,
        '킬로그램': 0.001,
        '밀리그램': 1000,
        '톤': 0.000001,
        '파운드': 0.00220462,
        '온스': 0.035274
    },
    area: {
        '제곱미터': 1,
        '제곱킬로미터': 1e-6,
        '헥타르': 0.0001,
        '제곱피트': 10.7639,
        '제곱야드': 1.19599,
        '에이커': 0.000247105
    },
    volume: {
        '세제곱미터': 1,
        '리터': 1000,
        '밀리리터': 1e6,
        '갤런': 264.172,
        '쿼트': 1056.69,
        '파인트': 2113.38
    },
    temperature: {
        '섭씨': [1, 0],
        '화씨': [1.8, 32],
        '켈빈': [1, 273.15]
    },
    time: {
        '초': 1,
        '분': 1/60,
        '시간': 1/3600,
        '일': 1/86400,
        '주': 1/604800,
        '년': 1/31536000
    },
    speed: {
        '미터/초': 1,
        '킬로미터/시': 3.6,
        '마일/시': 2.23694,
        '노트': 1.94384
    },
    dataSize: {
        '바이트': 1,
        '킬로바이트': 1/1024,
        '메가바이트': 1/1048576,
        '기가바이트': 1/1073741824,
        '테라바이트': 1/1099511627776
    },
    energy: {
        '줄': 1,
        '킬로줄': 0.001,
        '칼로리': 0.239006,
        '킬로칼로리': 0.000239006,
        '와트시': 0.000277778,
        '킬로와트시': 2.77778e-7
    },
    pressure: {
        '파스칼': 1,
        '킬로파스칼': 0.001,
        '바': 1e-5,
        '대기압': 9.86923e-6,
        '평방 인치 당 파운드(psi)': 0.000145038
    },
    angle: {
        '도': 1,
        '라디안': 0.0174533,
        '그라디안': 0.9
    },
    frequency: {
        '헤르츠': 1,
        '킬로헤르츠': 0.001,
        '메가헤르츠': 1e-6,
        '기가헤르츠': 1e-9
    }
};

function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    const t = translations[lang];

    document.title = t.title;
    document.getElementById('title').textContent = t.title;
    document.getElementById('fromValueLabel').textContent = t.fromValue;
    document.getElementById('fromUnitLabel').textContent = t.fromUnit;
    document.getElementById('toUnitLabel').textContent = t.toUnit;
    document.getElementById('decimalPlacesLabel').textContent = t.decimalPlaces;
    document.getElementById('fromValue').placeholder = t.placeholder;

    document.getElementById('lengthButton').textContent = t.lengthButton;
    document.getElementById('weightButton').textContent = t.weightButton;
    document.getElementById('areaButton').textContent = t.areaButton;
    document.getElementById('volumeButton').textContent = t.volumeButton;
    document.getElementById('temperatureButton').textContent = t.temperatureButton;
    document.getElementById('timeButton').textContent = t.timeButton;
    document.getElementById('speedButton').textContent = t.speedButton;
    document.getElementById('dataSizeButton').textContent = t.dataSizeButton;
    document.getElementById('energyButton').textContent = t.energyButton;
    document.getElementById('pressureButton').textContent = t.pressureButton;
    document.getElementById('angleButton').textContent = t.angleButton;
    document.getElementById('frequencyButton').textContent = t.frequencyButton;

    updateCategory();
}

// 언어 감지 및 설정 함수, 언어 추가 시 작업
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const htmlTag = document.documentElement;  // <html> 태그를 참조

    if (userLang.startsWith('ko')) {
        document.getElementById('languageSelect').value = 'ko';
        htmlTag.setAttribute("lang", "ko");
    } else if (userLang.startsWith('en')) {
        document.getElementById('languageSelect').value = 'en';
        htmlTag.setAttribute("lang", "en");
    } else if (userLang.startsWith('ja')) {
        document.getElementById('languageSelect').value = 'ja';
        htmlTag.setAttribute("lang", "ja");
    } else if (userLang.startsWith('es')) {
        document.getElementById('languageSelect').value = 'es';
        htmlTag.setAttribute("lang", "es");
    } else if (userLang.startsWith('de')) {
        document.getElementById('languageSelect').value = 'de';
        htmlTag.setAttribute("lang", "de");
    } else if (userLang.startsWith('fr')) {
        document.getElementById('languageSelect').value = 'fr';
        htmlTag.setAttribute("lang", "fr");
    } else if (userLang.startsWith('ru')) {
        document.getElementById('languageSelect').value = 'ru';
        htmlTag.setAttribute("lang", "ru");
    } else if (userLang.startsWith('it')) {
        document.getElementById('languageSelect').value = 'it';
        htmlTag.setAttribute("lang", "it");
    } else if (userLang.startsWith('pt-BR')) {
        document.getElementById('languageSelect').value = 'pt-BR';
        htmlTag.setAttribute("lang", "pt-BR");
    } else if (userLang.startsWith('id')) {
        document.getElementById('languageSelect').value = 'id';
        htmlTag.setAttribute("lang", "id");
    } else if (userLang.startsWith('zh')) {  // 중국어 간체와 번체 모두 지원
        document.getElementById('languageSelect').value = 'zh-CN';
        htmlTag.setAttribute("lang", "zh-CN");
    } else if (userLang.startsWith('ar')) {
        document.getElementById('languageSelect').value = 'ar';
        htmlTag.setAttribute("lang", "ar");
    } else if (userLang.startsWith('vi')) {
        document.getElementById('languageSelect').value = 'vi';
        htmlTag.setAttribute("lang", "vi");
    } else if (userLang.startsWith('uk')) {
        document.getElementById('languageSelect').value = 'uk';
        htmlTag.setAttribute("lang", "uk");
    } else if (userLang.startsWith('tr')) {
        document.getElementById('languageSelect').value = 'tr';
        htmlTag.setAttribute("lang", "tr");
    }
    else {
        // 설정된 언어가 없는 경우 기본 언어 설정
        document.getElementById('languageSelect').value = 'en';
        htmlTag.setAttribute("lang", "en");
    }

    changeLanguage();
}


window.onload = function() {
    detectLanguage();// 언어 감지 및 설정
    initializeConverter();// 변환기 초기화 및 기본 설정
};

function selectCategory(category) {
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(`${category}Button`).classList.add('active');

    updateCategory();
}

function updateCategory() {
    const category = document.querySelector('.category-button.active').id.replace('Button', '');
    updateUnitOptions(category);
    convert();
}

function updateUnitOptions(category) {
    const lang = document.getElementById('languageSelect').value;
    const t = translations[lang].units[category];
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    
    const units = Object.keys(t);
    
    units.forEach((unit, index) => {
        fromUnit.add(new Option(t[unit], unit));
        toUnit.add(new Option(t[unit], unit));
    });

    // '변환할 단위'의 기본값을 '단위'와 다른 값으로 설정
    if (units.length > 1) {
        toUnit.value = units[1];  // 두 번째 단위를 기본값으로 설정
    }
}
function convert() {
    const lang = document.getElementById('languageSelect').value;
    const category = document.querySelector('.category-button.active').id.replace('Button', '');
    const t = translations[lang];
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const fromValue = parseFloat(document.getElementById('fromValue').value);
    const decimalPlaces = parseInt(document.getElementById('decimalPlaces').value);
    
    if (isNaN(fromValue)) {
        document.getElementById('result').textContent = t.invalidNumber;
        return;
    }
    
    let result;
    if (category === 'temperature') {
        const [slope, intercept] = conversionRates[category][fromUnit];
        const [toSlope, toIntercept] = conversionRates[category][toUnit];
        result = (fromValue - intercept) / slope * toSlope + toIntercept;
    } else {
        result = fromValue * conversionRates[category][toUnit] / conversionRates[category][fromUnit];
    }
    
    document.getElementById('result').textContent = `${fromValue} ${t.units[category][fromUnit]} = ${result.toFixed(decimalPlaces)} ${t.units[category][toUnit]}`;
}

// 초기 설정을 위한 함수
function initializeConverter() {
    selectCategory('length');
    changeLanguage();
    convert();  // 초기 변환 수행
}

