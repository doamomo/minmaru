jQuery(function($){
    //現在の表示
    let status = "opening";
    //タイトルBGM設定
    let audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
    audio.loop = true;
    //音量を設定
    let bmgVol =0.2;
    audio.volume = bmgVol;

    //戦闘速度の設定
    let bt = 4;
    
    
    //タイトルボタンを押す
    $("#start").on("click", function(){
        //alert("first");
        audio.play();
        $(".outside").css("background-color", "#EEEEEE");
        $("#start").css("display", "none");
        $("<button class='skip'>skip</button>").appendTo(".center-box");
        opMovie();
        
    });

    //戦闘速度の変更
    $("#two").on("click", function(){
        bt = 2;
    });
    $("#three").on("click", function(){
        bt = 3;
    });
    $("#five").on("click", function(){
        bt = 5;
    });

    //オープニングムービー
    function opMovie(){
         //ムービースキップ
        
        $(".skip").on("click",function(){
           // alert("skip");
            $(".skip").remove();
            $(".upper-box-text").text("");
            $(".downer-box-text").text("");
            stageSelect();

        });
    }

   //ステージセレクト
   function stageSelect(){
        $("<button class='stage' id='tutorial'>チュートリアル</button>").appendTo("#buttonSelect");
        $("<button class='stage' id='stage1'>stage1</button>").appendTo("#buttonSelect");
        $("<button class='stage' id='stage2'>stage2</button>").appendTo("#buttonSelect");
       // $("<br>").appendTo("#buttonSelect");
        $("<button class='stage' id='stage3'>stage3</button>").appendTo("#buttonSelect");
        
        $(".stage").on("click",function(){

            let buttonPush = this.id;
            //alert(buttonPush);

            stage(buttonPush);

        });
   }

    $("#lit").on("click", function(){
        bmgVol = 0.2;
        audio.volume = bmgVol;
    });
    $("#mid").on("click", function(){
        bmgVol = 0.6;
        audio.volume = bmgVol;
    });
    $("#mute").on("click", function(){
        bmgVol = 0;
        audio.volume = bmgVol;
    });

    function stage(num){
       // alert(num);
       $(".stage").remove();
        switch(num){
            case "tutorial":
                tutorial();
            break;
            case "stage1":
                stage1();
            break;
            case "stage2":
                stage2();
            break
            case "stage3":
                stage3();
            break
            default:
                alert("エラーです");
            break;
        }
    }

    //チュートリアルステージ
    function tutorial(){
     //   alert("tutorial");
     $(".upper-box-text").html("敵:かかしさん<br>体:50 攻:10 防:5");
    //敵画像の表示
    $("img").attr("src", "./gif/kakasi.gif");
     battle(200,"tutorial");
    }

    //ステージ1
    function stage1(){
      //  alert("stage1");
        $(".upper-box-text").html("敵:スライムLV50<br>体:40 攻:5 防:0");
        audio.pause();
        audio = new Audio("./bgm/bgm_maoudamashii_8bit25.mp3");
        audio.loop = true;
        audio.volume = bmgVol;
        audio.play();

        //敵画像の表示
        $("img").attr("src", "./gif/sra4.gif");

        //戦闘パラメータを与え、関数を実行する
        battle(100,"stage1");
    }

    function stage2(){
        //  alert("stage1");
          $(".upper-box-text").html("敵:古代遺跡の守護兵<br>体:60 攻:40 防:65");
          audio.pause();
          audio = new Audio("./bgm/bgm_maoudamashii_8bit19.mp3");
          audio.loop = true;
          audio.volume = bmgVol;
          audio.play();
  
          //敵画像の表示
          $("img").attr("src", "./gif/robo.gif");
  
          //戦闘パラメータを与え、関数を実行する
          battle(300,"stage2");
      }

      function stage3(){
        //  alert("stage1");
          $(".upper-box-text").html("敵:復活の天竜<br>体:5 攻:10 防:10");
          audio.pause();
          audio = new Audio("./bgm/bgm_maoudamashii_8bit18.mp3");
          audio.loop = true;
          audio.volume = bmgVol;
          audio.play();
  
          //敵画像の表示
          $("img").attr("src", "./gif/dra.gif");
  
          //戦闘パラメータを与え、関数を実行する
          battle(300,"stage3");
      }

    //戦闘パラメーター設定
    function battle(point,stage){
        //体力、攻撃値、防御値の初期化
        let battleStage = stage;
        let maxPoint = point-1;
        let hitPoint1 = 0;
        let hitPoint2 = 0;
        let hitPoint3 = 1;
        let attackPoint1 = 0;
        let attackPoint2 = 0;
        let attackPoint3 = 0;
        let diffencePoint1 = 0;
        let diffencePoint2 = 0;
        let diffencePoint3 = 0;
        let pointWay = 0;
        let pointDigit = 0;
        //let pointCount = 0;

        let text = `<p class="parameter">割り振れる値：${maxPoint} （Enterで決定です）
        <br><span>体力に振る</span>・攻撃に振る・防御に振る
        <br>体力:<span>${hitPoint1}</span>${hitPoint2}${hitPoint3} 攻撃:${attackPoint1}${attackPoint2}${attackPoint3} 防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}</p>`;
        //ポイントの表示
        $(`${text}`).appendTo(".downer-box-text");

        //ポイントの割り振り
        $("body").keydown(function(event){
            let key = event.keyCode;
            switch(key){
                case 39:
                    if(pointWay === 2 && pointDigit === 2){
                        reText(pointWay,pointDigit);
                    }else if(pointDigit === 2){
                        pointDigit = 0;
                        pointWay++;
                        reText(pointWay,pointDigit);
                    }else{
                        pointDigit++;
                        reText(pointWay,pointDigit);
                    }
                    
                break; 
                case 37:
                    if(pointWay === 0 && pointDigit === 0){
                        reText(pointWay,pointDigit);
                    }else if(pointDigit === 0){
                        pointDigit = 2;
                        pointWay--;
                        reText(pointWay,pointDigit);
                    }else{
                        pointDigit--;
                        reText(pointWay,pointDigit);
                    }
                    
                break;
                case 38:
                    parameterSet(pointWay,pointDigit,"add");
                    reText(pointWay,pointDigit);
                break;
                case 40:
                    parameterSet(pointWay,pointDigit,"sub");
                    reText(pointWay,pointDigit);
                break;

                //エンターキーで設定終了
                case 13:
                    let hp = hitPoint1 * 100 + hitPoint2 * 10 + hitPoint3;
                    let ap = attackPoint1 * 100 + attackPoint2 * 10 + attackPoint3;
                    let dp = diffencePoint1 * 100 + diffencePoint2 * 10 + diffencePoint3;
                    
                    next(hp,ap,dp,maxPoint);

                break; 
                default:
                break;

            }
        });


        //エンター後の処理
        function next(hp,ap,dp,point){
            $("body").off();
            $(".downer-box-text").text("戦闘開始 （Enterで進行）");
            $("body").keydown(function(event){
                let key = event.keyCode;
                if(key === 13){
                    
                    $("body").off();
                    switch(battleStage){
                        case "stage1":
                            $(".downer-box-text").text("スライムLV５０が現れた");
                            stage1(hp,ap,dp,point);
                        break
                        case "tutorial":
                            $(".downer-box-text").text("かかしが現れた");
                            tutorial(hp,ap,dp,point);
                        break
                        case "stage2":
                            $(".downer-box-text").text("遺跡の守護者が現れた");
                            stage2(hp,ap,dp,point);
                        break
                        case "stage3":
                            $(".downer-box-text").text("天空竜が現れた");
                            stage3(hp,ap,dp,point);
                        break
                    }
                }
            });

            //skipボタン待ち
            function skip(){
                $("<button class='skip'>skip</button>").appendTo(".center-box");

                $(".skip").on("click",function(){
                    $(".skip").remove();
                    return
                });
            }

            //ステータス変化演出
            function status(hp,ap,dp,ehp,eap,edp){
                $(".upper-box-text").html(`自分 HP:${hp}攻:${ap}防:${dp}<br>敵 HP:${ehp}攻:${eap}防:${edp}`);
                return
            }
            //ダメージ演出
            function damage(ap,ehp,edp,damage,button){
                damage = ap - edp;
                if(damage > 0){
                    ehp -= damage;
                    if(ehp <= 0){
                        //次のボタン判定でクリアにする
                        button = 999;
                        ehp = 0;
                    }
                }else{
                    damage = 0;
                }
                return ap,ehp,edp,damage,button
            }
            //ゲームオーバ演出
            function gameover(){
                audio.pause();
                audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                audio.loop = true;
                audio.volume = bmgVol;
                audio.play();
                $(".downer-box-text").html("あなたは倒された…！！！");
                $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                $(".next").remove();
            }
            //クリア演出
            function clear(){
                switch(battleStage){
                    case "stage1":
                        
                        $(".upper-box-text").text("STAGE1 CLERE");
                        $(".downer-box-text").text("スライムLV50を倒した");
                        $(".next").remove();
                        audio.pause();
                        audio = new Audio("./bgm/bgm_maoudamashii_8bit13.mp3");
                        audio.loop = true;
                        audio.volume = bmgVol;
                        audio.play();
                    break
                }
            }

            //チュートリアルステージ処理
            function tutorial(hp,ap,dp,point){
                let button = 0;
                let ehp = 50;
                let eap = 10;
                let edp = 5;
                let damage = 0;
                let deffence = 0;
                let count = 0;
                let turn = 0;
                $("<button class='next'>next</button>").appendTo(".center-box");

                //チュートリアルのスキル処理
                function enemySkill0(){
                    if(hp <= 3){
                        hp = 0;
                        button = 110;
                    }else{
                        hp -= 3;
                    }
                    $(".downer-box-text").html(`Turn${turn}:かかしのスキル発動<br>仕込み矢<br>プレイヤーに３のダメージを与えた！`);
                    status(hp,ap,dp,ehp,eap,edp);
                }

                //敵からのダメージ演出
                function deffence0(){
                    deffence = eap - dp;
                    if(deffence > 0){
                        hp -= deffence;
                        if(hp <= 0){
                            button = 110;
                            hp = 0;
                        }
                    }else{
                        deffence = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:敵の攻撃。${deffence}のダメージを受けた！`);
                }

                //ダメージ演出
                function damage0(){
                    damage = ap - edp;
                    if(damage > 0){
                        ehp -= damage;
                        if(ehp <= 0){
                            //次のボタン判定でクリアにする
                            button = 999;
                            ehp = 0;
                        }
                    }else{
                        damage = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:プレイヤの攻撃。${damage}のダメージを与えた！`);
                }

                $(".next").on("click",function(){
                    //ボタンを押した回数をカウント
                    
                    //何ターン目か計算して代入
                    turn = Math.floor(button / 10);
                    //ターン中のどの処理かを判断する値を代入
                    count = button % 10;

                    //0ターンで分岐
                    if(turn === 0){
                        switch(count){
                            case 0:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("値1で体力1を割り振れます<br>値4で攻撃1、値7で防御1<br>矢印キーで割り振ってから戦闘します");
                            break
                            case 1:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("戦闘ではまず敵のスキルが発動します<br>その後敵の攻撃<br>敵攻撃-自防御 の値がダメージです");
                            break
                            case 2:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("そのあと自分の攻撃になります<br>自攻撃-敵防御 が敵体力から減らされます");
                            break
                            case 3:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("勝利条件は、敵の体力を０にすること<br>敗北条件は、自分の体力が０になるか<br>１０ターン経過時、敵を倒せなかった場合です");
                            break
                            case 4:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("ちなみに全部の値を始めに<br>割り振らず、余らせても大丈夫です<br>では模擬戦闘スタート");
                                button = 9;
                            break
                        }
                    }else if(turn === 11){
                        //ゲームオーバ処理
                        switch(count){
                            case 0:
                                $(".downer-box-text").html(`10ターン以内に倒すことができなかった…`);
                            break
                            case 1:
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $(".downer-box-text").html("敗北しました、また試してみてください");
                                $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                            break
                            case 2:
                                $(".downer-box-text").html(`敵を倒す方法は一つではないかもしれません`);
                            break
                            case 3:
                                $(".downer-box-text").html(`頑張ってください`);
                            break
                            case 4:
                                
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                        
                            break
                        }
                        

                    }else if(turn === 100){
                        //クリア処理
                        switch(count){
                            case 0:
                                $(".upper-box-text").text("チュートリアル CLERE");
                                $(".downer-box-text").text("かかしを倒した");
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit13.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                            break
                            case 1:
                                $(".downer-box-text").html("このように敵を倒すことでクリアとなります");
                            break
                            case 2:
                                $(".downer-box-text").html("敵のスキルは複数存在したり<br>特定条件でしか発動しない<br>ものもあるようです");
                            break
                            case 3:
                                $(".downer-box-text").html("健闘を祈ります");
                            break
                            case 4:
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                            break
                        }

                    }else if(turn >= 1){
                        switch(count){
                            case 0:
                                
                                    $(".downer-box-text").html("かかしが攻撃してくるようだ！！");
                                
                                
                            break
                            case 1:
                                enemySkill0();
                                
                            break
                            case 2:
                                deffence0();
                            break
                            case 3:
                                damage0();
                                if(button === 999){

                                }else{
                                    button += 6
                                }
                            break
                        }
                    }
                    button++;
                });
            }

            //ステージ3処理
            function stage3(hp,ap,dp,point){
                let button = 0;
                let ehp = 5;
                let eap = 10;
                let edp = 10;
                let damage = 0;
                let deffence = 0;
                let count = 0;
                let turn = 0;
                $("<button class='next'>next</button>").appendTo(".center-box");

                //天竜のスキル処理a
                function enemySkill3a(){
                    //プレイヤーの最も高い能力値を選んで2で割り、切り上げる。高い数が複数ある場合は足し合わせる
                    let add = 0;
                    if(hp === ap && hp === dp){
                        add = Math.ceil((hp + ap + dp) / 2);
                    }else if(hp === ap && hp > dp){
                        add = Math.ceil((hp + ap) / 2);
                    }else if(hp === dp && hp > ap){
                        add = Math.ceil((hp + dp) / 2);
                    }else if(ap === dp && ap > hp){
                        add = Math.ceil((ap + dp) / 2);
                    }else if(hp > ap && hp > dp){
                        add = Math.ceil(hp / 2);
                    }else if(ap > hp && ap > dp){
                        add = Math.ceil(ap / 2);
                    }else if(dp > hp && dp > ap){
                        add = Math.ceil(dp / 2);
                    }

                    //体力と攻防（この二つは敵は常に一致）を比較し、低いほうにaddを加える
                    if(ehp === eap){
                        ehp += add;
                        eap += add;
                        edp += add;
                    }else if(ehp > eap){
                        eap += add;
                        edp += add;
                    }else if(ehp < eap){
                        ehp += add;
                    }
                    
                    /*else if(ap === dp && ap > hp){
                        eap += add;
                        edp += add;
                    }else if(hp > ap && hp > dp){
                        ehp += add;
                    }else if(ap > hp && ap > dp){
                        eap += add;
                    }else if(dp > hp && dp > ap){
                        edp += add;
                    }*/


                    $(".downer-box-text").html(`Turn${turn}:天竜のスキル『強者復活』<br>プレイヤーの最も高い能力値を吸収し<br>天竜の最も低い能力値に加えた！`);
                    status(hp,ap,dp,ehp,eap,edp);
                }

                //天竜のスキル処理b
                function enemySkill3b(){
                    let life = 0;
                    if(ap > dp){
                        life = ap - dp;
                    }else{
                        life = dp - ap;
                    }

                    $(".downer-box-text").html(`Turn${turn}:天竜のスキル『再生』<br>プレイヤーの能力値（攻or防）の差を吸収<br>天竜の体力に加えた！`);
                    status(hp,ap,dp,ehp,eap,edp);
                }

                //敵からのダメージ演出
                function deffence3(){
                    deffence = eap - dp;
                    if(deffence > 0){
                        hp -= deffence;
                        if(hp <= 0){
                            button = 110;
                            hp = 0;
                        }
                    }else{
                        deffence = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:敵の攻撃。${deffence}のダメージを受けた！`);
                }

                //ダメージ演出
                function damage3(){
                    damage = ap - edp;
                    if(damage > 0){
                        ehp -= damage;
                        if(ehp <= 0){
                            //次のボタン判定でクリアにする
                            button = 999;
                            ehp = 0;
                        }
                    }else{
                        damage = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:プレイヤの攻撃。${damage}のダメージを与えた！`);
                }

                $(".next").on("click",function(){
                    //ボタンを押した回数をカウント
                    
                    //何ターン目か計算して代入
                    turn = Math.floor(button / 10);
                    //ターン中のどの処理かを判断する値を代入
                    count = button % 10;

                    //0ターンで分岐
                    if(turn === 0){
                        switch(count){
                            case 0:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("……お前は誰だ");
                            break
                            case 1:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("我が肉体の復活を前にし<br>お前はどうする気だ");
                            break
                            case 2:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("我をどうするかよりまず……");
                            break
                            case 3:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("己の身が滅びぬ選択をすることだな");
                                button = 9;
                            break
                            
                        }
                    }else if(turn === 11){
                        //ゲームオーバ処理
                        switch(count){
                            case 0:
                                $(".downer-box-text").html(`10ターン以内に倒すことができなかった…`);
                            break
                            case 1:
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $(".downer-box-text").html("あなたは倒された…！！！");
                                $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                            break
                            case 2:
                                $(".downer-box-text").html(`我の肉体の完全復活も近い`);
                            break
                            case 3:
                                $(".downer-box-text").html(`さらば、だ`);
                            break
                            case 4:
                                
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                        
                            break
                        }
                        

                    }else if(turn === 100){
                        //クリア処理
                        switch(count){
                            case 0:
                                $(".upper-box-text").text("STAGE3 CLERE");
                                $(".downer-box-text").text("天空竜を倒した");
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit13.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                            break
                            case 1:
                                $(".downer-box-text").html("我が望みを……このようなところで……");
                            break
                            case 2:
                                $(".downer-box-text").html("貴様……！！ぐ……ぐおっ……");
                            break
                            case 3:
                                $(".downer-box-text").html("天空流は地に落ち、息絶えた");
                            break
                            case 4:
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                            break
                        }

                    }else if(turn >= 1){
                        switch(count){
                            case 0:                        
                                    $(".downer-box-text").html("敵は肉体を再生させ<br>己の身を強化している！！");                              
                            break
                            case 1:
                                enemySkill3a();
                            break
                            case 2:
                                enemySkill3b();
                            break
                            case 3:
                                deffence3();
                            break
                            case 4:
                                damage3();
                                if(button === 999){

                                }else{
                                    button += 5
                                }
                            break
                        }
                    }
                    button++;
                });
            }

            //ステージ2処理
            function stage2(hp,ap,dp,point){
                let button = 0;
                let ehp = 60;
                let eap = 40;
                let edp = 65;
                let damage = 0;
                let deffence = 0;
                let count = 0;
                let turn = 0;
                $("<button class='next'>next</button>").appendTo(".center-box");

                //遺跡兵のスキル処理
                function enemySkill2(){
                    if(ehp > turn){
                        ehp -= turn;
                    }else{
                        ehp = 0;
                        button = 999;
                    }
                    if(eap > turn){
                        eap -= turn;
                    }else{
                        eap = 0;
                    }
                    if(edp > turn){
                        edp -= turn;
                    }else{
                        edp = 0;
                    }
                    $(".downer-box-text").html(`Turn${turn}:遺跡兵のスキル発動<br>『朽ちた機械』<br>敵の能力すべてが${turn}下がった！`);
                    status(hp,ap,dp,ehp,eap,edp);
                }

                //敵からのダメージ演出
                function deffence2(){
                    deffence = eap - dp;
                    if(deffence > 0){
                        hp -= deffence;
                        if(hp <= 0){
                            button = 110;
                            hp = 0;
                        }
                    }else{
                        deffence = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:敵の攻撃。${deffence}のダメージを受けた！`);
                }

                //ダメージ演出
                function damage2(){
                    damage = ap - edp;
                    if(damage > 0){
                        ehp -= damage;
                        if(ehp <= 0){
                            //次のボタン判定でクリアにする
                            button = 999;
                            ehp = 0;
                        }
                    }else{
                        damage = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:プレイヤの攻撃。${damage}のダメージを与えた！`);
                }

                $(".next").on("click",function(){
                    //ボタンを押した回数をカウント
                    
                    //何ターン目か計算して代入
                    turn = Math.floor(button / 10);
                    //ターン中のどの処理かを判断する値を代入
                    count = button % 10;

                    //0ターンで分岐
                    if(turn === 0){
                        switch(count){
                            case 0:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("…………");
                            break
                            case 1:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("………遺跡二侵入者アリ<br>警告シマス……");
                            break
                            case 2:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("コノ遺跡二、貴方ノ探テイルモノハ<br>アリマセン。立チ去リナサイ");
                            break
                            case 3:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("………");
                            break
                            case 4:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("……立チ去ル意思ナシ<br>侵入者ヲ排除シマス");
                                button = 9;
                            break
                        }
                    }else if(turn === 11){
                        //ゲームオーバ処理
                        switch(count){
                            case 0:
                                $(".downer-box-text").html(`10ターン以内に倒すことができなかった…`);
                            break
                            case 1:
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $(".downer-box-text").html("あなたは倒された…！！！");
                                $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                            break
                            case 2:
                                $(".downer-box-text").html(`侵入者ノ排除完了……引キ続キ警戒任…………`);
                            break
                            case 3:
                                $(".downer-box-text").html(`守護者は動かない`);
                            break
                            case 4:
                                
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                        
                            break
                        }
                        

                    }else if(turn === 100){
                        //クリア処理
                        switch(count){
                            case 0:
                                $(".upper-box-text").text("STAGE2 CLERE");
                                $(".downer-box-text").text("遺跡の守護者を倒した");
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit13.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                            break
                            case 1:
                                $(".downer-box-text").html("……機能ノ低下ヲ確認。遺跡ヲ…<br>遺跡ノ…守護……不可能…");
                            break
                            case 2:
                                $(".downer-box-text").html("…………");
                            break
                            case 3:
                                $(".downer-box-text").html("守護者の機能は完全に停止した");
                            break
                            case 4:
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                            break
                        }

                    }else if(turn >= 1){
                        switch(count){
                            case 0:
                                if(turn === 9){
                                    $(".downer-box-text").html("敵の機能が大幅に低下<br>攻撃ができないようだ");
                                }else{
                                    $(".downer-box-text").html("敵の体は朽ちている！！");
                                }
                                
                            break
                            case 1:
                                enemySkill2();
                                
                            break
                            case 2:
                                deffence2();
                            break
                            case 3:
                                damage2();
                                if(button === 999){

                                }else{
                                    button += 6
                                }
                            break
                        }
                    }
                    button++;
                });
            }
            
            //ステージ1処理
            function stage1(hp,ap,dp,point){
                let bt2 = bt;
                let button = 0;
                let ehp = 40;
                let eap = 5;
                let edp = 0;
                let damage = 0;
                let deffence = 0;
                $("<button class='next'>next</button>").appendTo(".center-box");
               
                
                //敵からのダメージ演出
                function deffence1(){
                    deffence = eap - dp;
                    if(deffence > 0){
                        hp -= deffence;
                        if(hp <= 0){
                            button = 100;
                            hp = 0;
                        }
                    }else{
                        deffence = 0;
                    }
                }

                //ダメージ演出
                function damage1(){
                    damage = ap - edp;
                    if(damage > 0){
                        ehp -= damage;
                        if(ehp <= 0){
                            //次のボタン判定でクリアにする
                            button = 999;
                            ehp = 0;
                        }
                    }else{
                        damage = 0;
                    }
                   
                }
                //スライムのスキル処理
                function enemySkill(){
                    if(hp>0){
                        hp--;
                        if(hp === 0){
                            button = 100;
                        }
                    }
                    if(ap>0){
                        ap--;
                    }
                    if(dp>0){
                        dp--;
                    }
                }

                $(".next").on("click",function(){
                    button++;
                    
                    switch(button){
                        case 1:
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("スライム「このような世界では<br>僕らのようなスライムがお試し相手と<br>決まっているらしい。」");
                        break
                        case 2:
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("スライム「まったく、嫌になってしまうね。<br>さて、倒せるものなら倒してみな」");
                        break
                        case 3:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn1:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 4:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn1:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 5:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn1:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 6:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn2:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 7:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn2:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 8:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn2:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 9:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn3:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 10:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn3:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 11:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn3:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 12:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn4:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 13:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn4:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 14:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn4:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 15:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn5:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 16:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn5:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 17:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn5:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 18:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn6:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 19:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn6:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 20:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn6:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 21:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn7:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 22:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn7:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 23:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn7:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 24:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn8:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 25:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn8:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 26:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn8:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 27:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn9:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 28:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn9:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 29:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn9:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 30:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn10:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 31:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn10:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 32:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn10:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 33:
                            $(".downer-box-text").html(`10ターン以内に倒すことができなかった…`);

                        case 1000:
                            $(".upper-box-text").text("STAGE1 CLERE");
                            $(".downer-box-text").text("スライムLV50を倒した");
                            audio.pause();
                            audio = new Audio("./bgm/bgm_maoudamashii_8bit13.mp3");
                            audio.loop = true;
                            audio.volume = bmgVol;
                            audio.play();
                            
                        break
                        case 1001:
                            $(".downer-box-text").html("…まったく理不尽だ<br>君たちからすれば僕は石ころ…");
                        break
                        case 1002:
                            $(".downer-box-text").html("僕たちからすれば…同じ石でも<br>まるで隕石…理不尽な強さの…");
                        break
                        case 1003:
                            $(".upper-box-text").html("");
                            $(".downer-box-text").html("");
                            $(".next").remove();
                            audio.pause();
                            audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                            audio.loop = true;
                            audio.volume = bmgVol;
                            audio.play();
                            $("img").attr("src","");
                            stageSelect();
                        break
                        case 101:
                            audio.pause();
                            audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                            audio.loop = true;
                            audio.volume = bmgVol;
                            audio.play();
                            $(".downer-box-text").html("あなたは倒された…！！！");
                            $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                            
                        break
                        case 102:
                            $(".downer-box-text").html("残念だったね。僕だって<br>簡単にやられるわけにはいかない");
                        break
                        case 103:
                            $(".downer-box-text").html("そこでくたばりなよ<br>君の冒険は終わりさ");
                        break
                        case 104:
                            $(".upper-box-text").html("");
                            $(".downer-box-text").html("");
                            $(".next").remove();
                            audio.pause();
                            audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                            audio.loop = true;
                            audio.volume = bmgVol;
                            audio.play();
                            $("img").attr("src","");
                            stageSelect();
                        break
                    }

                });
                
                
            }


            
        }
        //値を増減
        function parameterSet(way,digit,calc){
            //下キーを押した場合
            if(calc === "sub"){
                if(way === 0){
                    if(digit === 0){
                        if(hitPoint1 >= 1){
                            if(hitPoint2 === 0 && hitPoint3 === 0){
                                maxPoint = maxPoint + 99;
                                hitPoint1--;
                                
                                hitPoint3 = 1;
                            }else{
                                maxPoint = maxPoint + 100;
                                hitPoint1--;

                            }
                            
                        }
                    }else if(digit === 1){
                        if(hitPoint1 >= 1 || (hitPoint1 === 0 && hitPoint2 >= 1)){
                            if(hitPoint2 === 0){

                                hitPoint1--;
                                hitPoint2 = 9;
                                maxPoint = maxPoint + 10;
                            }else{
                                if(hitPoint1 === 0 && hitPoint3 === 0){
                                    hitPoint3 = 1;
                                    hitPoint2--;
                                    maxPoint = maxPoint + 9;
                                }else{
                                    hitPoint2--;
                                    maxPoint = maxPoint + 10;

                                }
                            }
                            
                            
                        }

                    }else if(digit === 2){
                        if(hitPoint1 >= 1 || hitPoint2 >= 1 || hitPoint3 >= 2){
                            if(hitPoint2 === 0 && hitPoint3 === 0){
                                hitPoint1--;
                                hitPoint2 = 9;
                                hitPoint3 = 9;
                            }else if(hitPoint3 === 0){
                                hitPoint2--;
                                hitPoint3 = 9;
                            }else{
                                
                                hitPoint3--;
                            }
                            

                            maxPoint++
                        }
                    }
                }else if(way === 1){
                    if(digit === 0){
                        if(attackPoint1 >= 1){
                            
                            maxPoint = maxPoint + 400;
                            attackPoint1--;
                            
                        }
                    }else if(digit === 1){
                        if(attackPoint1 >= 1 || attackPoint2 >= 1){
                            if(attackPoint2 === 0){

                                attackPoint1--;
                                attackPoint2 = 9;

                            }else{

                                attackPoint2--;
                            }
                            maxPoint = maxPoint + 40;
                            
                        }

                    }else if(digit === 2){
                        if(attackPoint1 >= 1 || attackPoint2 >= 1 || attackPoint3 >= 1){
                            if(attackPoint2 === 0 && attackPoint3 === 0){
                                attackPoint1--;
                                attackPoint2 = 9;
                                attackPoint3 = 9;
                            }else if(attackPoint3 === 0){
                                attackPoint2--;
                                attackPoint3 = 9;
                            }else{
                                
                                attackPoint3--;
                            }
                            

                            maxPoint = maxPoint + 4;
                        }
                    }
                }else if(way === 2){
                    if(digit === 0){
                        if(diffencePoint1 >= 1){
                            
                            maxPoint = maxPoint + 700;
                            diffencePoint1--;
                            
                        }
                    }else if(digit === 1){
                        if(diffencePoint1 >= 1 || diffencePoint2 >= 1){
                            if(diffencePoint2 === 0){

                                diffencePoint1--;
                                diffencePoint2 = 9;

                            }else{

                                diffencePoint2--;
                            }
                            maxPoint = maxPoint + 70;
                            
                        }

                    }else if(digit === 2){
                        if(diffencePoint1 >= 1 || diffencePoint2 >= 1 || diffencePoint3 >= 1){
                            if(diffencePoint2 === 0 && diffencePoint3 === 0){
                                diffencePoint1--;
                                diffencePoint2 = 9;
                                diffencePoint3 = 9;
                            }else if(diffencePoint3 === 0){
                                diffencePoint2--;
                                diffencePoint3 = 9;
                            }else{
                                
                                diffencePoint3--;
                            }
                            

                            maxPoint = maxPoint + 7;
                        }
                    }
                }
            //上キーを押した場合
            }else if(calc === "add"){
                if(way === 0){
                    if(digit === 0){
                        if(maxPoint >= 100){
                            
                            maxPoint = maxPoint - 100;
                            hitPoint1++;
                            
                        }
                    }else if(digit === 1){
                        if(maxPoint >= 10){
                            if(hitPoint2 === 9){

                                hitPoint1++;
                                hitPoint2 = 0;

                            }else{

                                hitPoint2++;
                            }
                            maxPoint = maxPoint - 10;
                            
                        }

                    }else if(digit === 2){
                        if(maxPoint >= 1){
                            if(hitPoint2 === 9 && hitPoint3 === 9){
                                hitPoint1++;
                                hitPoint2 = 0;
                                hitPoint3 = 0;
                            }else if(hitPoint3 === 9){
                                hitPoint2++;
                                hitPoint3 = 0;
                            }else{
                                
                                hitPoint3++;
                            }
                            

                            maxPoint--
                        }
                    }
                }else if(way === 1){
                    if(digit === 0){
                        if(maxPoint >= 400){
                            
                            maxPoint = maxPoint - 400;
                            attackPoint1++;
                            
                        }
                    }else if(digit === 1){
                        if(maxPoint >= 40){
                            if(attackPoint2 === 9){

                                attackPoint1++;
                                attackPoint2 = 0;

                            }else{

                                attackPoint2++;
                            }
                            maxPoint = maxPoint - 40;
                            
                        }

                    }else if(digit === 2){
                        if(maxPoint >= 4){
                            if(attackPoint2 === 9 && attackPoint3 === 9){
                                attackPoint1++;
                                attackPoint2 = 0;
                                attackPoint3 = 0;
                            }else if(attackPoint3 === 9){
                                attackPoint2++;
                                attackPoint3 = 0;
                            }else{
                                
                                attackPoint3++;
                            }
                            

                            maxPoint = maxPoint - 4;
                        }
                    }
                }else if(way === 2){
                    if(digit === 0){
                        if(maxPoint >= 700){
                            
                            maxPoint = maxPoint - 700;
                            diffencePoint1++;
                            
                        }
                    }else if(digit === 1){
                        if(maxPoint >= 70){
                            if(diffencePoint2 === 9){

                                diffencePoint1++;
                                diffencePoint2 = 0;

                            }else{

                                diffencePoint2++;
                            }
                            maxPoint = maxPoint - 70;
                            
                        }

                    }else if(digit === 2){
                        if(maxPoint >= 7){
                            if(diffencePoint2 === 9 && diffencePoint3 === 9){
                                diffencePoint1++;
                                diffencePoint2 = 0;
                                diffencePoint3 = 0;
                            }else if(diffencePoint3 === 9){
                                diffencePoint2++;
                                diffencePoint3 = 0;
                            }else{
                                
                                diffencePoint3++;
                            }
                            

                            maxPoint = maxPoint - 7;
                        }
                    }
                }
            }
        }

        //選択肢の移動
        function reText(way,digit){
            switch(way){
                case 0:
                    text =  `割り振れる値：${maxPoint} （Enterで決定です）`;
                    switch(digit){
                        case 0:
                        text = text + `<br><span>体力に振る</span>・攻撃に振る・防御に振る
                        <br>体力:<span>${hitPoint1}</span>${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 1:
                        text = text + `<br><span>体力に振る</span>・攻撃に振る・防御に振る
                        <br>体力:${hitPoint1}<span>${hitPoint2}</span>${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 2:
                        text = text + `<br><span>体力に振る</span>・攻撃に振る・防御に振る
                        <br>体力:${hitPoint1}${hitPoint2}<span>${hitPoint3}</span>
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                    }
                
                break;
                case 1:
                    text =  `割り振れる値：${maxPoint} （Enterで決定です）`;
                    switch(digit){
                        case 0:
                        text = text + `<br>体力に振る・<span>攻撃に振る</span>・防御に振る
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:<span>${attackPoint1}</span>${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 1:
                        text = text + `<br>体力に振る・<span>攻撃に振る</span>・防御に振る
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}<span>${attackPoint2}</span>${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 2:
                        text = text + `<br>体力に振る・<span>攻撃に振る</span>・防御に振る
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}<span>${attackPoint3}</span>
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                    }
                break;
                case 2:
                    text =  `割り振れる値：${maxPoint} （Enterで決定です）`;
                    switch(digit){
                        case 0:
                        text = text + `<br>体力に振る・攻撃に振る・<span>防御に振る</span>
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:<span>${diffencePoint1}</span>${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 1:
                        text = text + `<br>体力に振る・攻撃に振る・<span>防御に振る</span>
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}<span>${diffencePoint2}</span>${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 2:
                        text = text + `<br>体力に振る・攻撃に振る・<span>防御に振る</span>
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}<span>${diffencePoint3}</span>`;  
                        $(".parameter").html(`${text}`);
                        break;
                    }
                break;
            }
            

        }
    }

    
});

