<template>
    <div id="page2">
        <div class="page2">
            <div class="box_table">
                <p>重庆燃气集团股份有限公司渝中分公司</p>
                <p style="text-align:center;">天然气安装业务申请表</p>
                <div class="selectdata">
                    <h4 style="float:left;">填表时间：</h4>
                    <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                </div>
                <table class="table">
                    <!-- <caption>天然气安装业务申请表</caption> -->
                    <!-- 1 -->
                    <tr>
                        <td colspan="10">客户基本资料</td>
                    </tr>
                    <tr>
                        <td rowspan="5" width="2%">一</td>
                        <td width="15%">工程名陈/申请方</td>
                        <td colspan="8" width="80%"><input class="clearinput" type="text"> </td>
                    </tr>
                    <tr>
                        <td rowspan="2">工程地址</td>
                        <td colspan="8" class="address"> 
                            <div class="addressinfo">
                                <div class="road basic">
                                    <input type="text"> 
                                    <span>街(路)</span>
                                </div>
                                <div class="mark1 basic infowidth">
                                    <input type="text">
                                    <span>号</span>
                                </div>
                                <div class="build basic infowidth">
                                    <input type="text">
                                    <span>栋(幢)</span>
                                </div>
                                <div class="bed basic infowidth">
                                    <input type="text">
                                    <span>层</span>
                                </div>
                                <div class="mark2 basic infowidth">
                                    <input type="text"> 
                                    <span>号</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8"><input class="clearinput" type="text"></td>
                    </tr>
                    <tr>
                        <td>联系人</td>
                        <td colspan="3"><input class="clearinput" type="text"></td>
                        <td class="tdwidth">联系电话</td>
                        <td class="tdwidth"><input class="clearinput" type="text"></td>
                        <td colspan="3"><input class="clearinput" type="text"></td>
                    </tr>
                    <tr>
                        <td>身份证号</td>
                        <td colspan="3"><input class="clearinput" type="text"></td>
                        <td>房屋产权</td>
                        <td>自由()</td>
                        <td colspan="3">租用()</td>
                    </tr>
                    <!-- 2 -->
                    <tr>
                        <td colspan="10">客户需求</td>
                    </tr>
                    <tr>
                        <td rowspan="6">二</td>
                        <td></td>
                        <td class="tdwidth">民用</td>
                        <td class="tdwidth">集体</td>
                        <td class="tdwidth">商业</td>
                        <td>工业</td>
                        <td>CNG</td>
                        <td colspan="3">备注</td>
                    </tr>
                    <tr>
                        <td>新安装(户)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td colspan="3"><input class="clearinput" type="text"></td>
                    </tr>
                    <tr>
                        <td>增容(户)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td colspan="3"><input class="clearinput" type="text"></td>
                    </tr>
                    <tr>
                        <td>迁装(户)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td colspan="3"><input class="clearinput" type="text"></td>
                    </tr>
                    <tr>
                        <td>恢复(户)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td colspan="3"><input class="clearinput" type="text"></td>
                    </tr>
                    <tr>
                        <td>拆除(户)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td colspan="3"><input class="clearinput" type="text"></td>
                    </tr>
                    <!-- 3 -->
                    <tr>
                        <td rowspan="5"></td>
                        <td colspan="9">燃气设备用气量参数表</td>
                    </tr>
                    <tr>
                        <td colspan="2">燃具名称</td>
                        <td colspan="2">数量</td>
                        <td colspan="2">燃气流量M³/h</td>
                        <td colspan="3">合计</td>
                    </tr>
                    <tr>
                        <td colspan="2"><input class="clearinput" type="text"></td>
                        <td colspan="2"><input class="clearinput" type="text"></td>
                        <td colspan="2"><input class="clearinput" type="text"></td>
                        <td colspan="3"><input class="clearinput" type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input class="clearinput" type="text"></td>
                        <td colspan="2"><input class="clearinput" type="text"></td>
                        <td colspan="2"><input class="clearinput" type="text"></td>
                        <td colspan="3"><input class="clearinput" type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input class="clearinput" type="text"></td>
                        <td colspan="2"><input class="clearinput" type="text"></td>
                        <td colspan="2"><input class="clearinput" type="text"></td>
                        <td colspan="3"><input class="clearinput" type="text"></td>
                    </tr>
                    <!-- 4 -->
                    <tr>
                        <td rowspan="4">三</td>
                        <td colspan="4" rowspan="2" class="apply">
                            <div class="name">
                                <span>受理人：</span>
                                <input type="text">
                            </div>
                            <div class="time">
                                <span>时间：</span>
                                <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                            </div>
                        </td>
                        <!-- <td colspan="2" rowspan="2">时间</td> -->
                        <td colspan="5"><input class="clearinput" type="text"></td>
                    </tr>
                    <tr>
                        <td colspan="5" class="allperson">
                            <div class="person">
                                <span>经办人：</span>
                                <input type="text">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" rowspan="2" class="apply">
                            <div class="name">
                                <span>审核人：</span>
                                <input type="text">
                            </div>
                            <div class="time">
                                <span>时间：</span>
                                <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                            </div>
                        </td>
                        <!-- <td colspan="2" rowspan="2">时间</td> -->
                        <td colspan="5" class="allperson">
                            <div class="person">
                                <span>填表人：</span>
                                <input type="text">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="5" class="allperson">
                            <div class="person">
                                <span>推荐人：</span>
                                <input type="text">
                            </div>
                        </td>
                    </tr>
                </table>
                <div style="text-align:right;margin-top:20px;">
                    <Button type="primary">保存</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .page2{
        font-size: 16px;
    }
   .box_table{
        width: 90%;
        //  min-width: 1100px; 
        margin: 0 auto;
    }
    .box_table p{
        text-align: center;
    }
    .box_table p:nth-child(2){
        font-weight: bold;
        padding:10px 0;
    }
    .box_table .selectdata{
        height: 40px;
        line-height: 40px;
    }
    .table{
        border-collapse:collapse;
        width: 100%;
        text-align: center;
    }
    .table caption{
        font-weight: bold;
    }
    .table,td{
        border: 1px solid black;
    }
    .table tr{
        height: 30px;
    }
    .tdwidth{
        width: 10%
    }
    .clearinput{
        background:none;  
        outline:none;  
        border:none;
        width: 100%;
        height: 100%;
    }
    .apply{
        /* display: flex; */
        height: 30px;
    }
    .apply .name{
        width: 50%;
        height: 60px;
        line-height: 60px;
        text-align: left;
        float: left;
        display: flex;
    }
    .apply .name input{
        flex: 1;
        height: 60px;
        border: none;
        background: none;
        outline: none;
    }
    .apply .time{
        width: 50%;
        height: 60px;
        line-height: 60px;
        text-align: left;
        float: right;
    }
    .allperson{
        text-align: left;
        
    }
    .allperson .person{
        display: flex;
        height: 30px;
        line-height: 30px;
        padding-left: 5px;
    }
    .allperson .person input{
        border: none;
        height: 30px;
        background: none;
        outline: none;
        flex: 1;
    }
    .address .addressinfo input{
        background: none;
        border: none;
        outline: none;
        text-align: center;
    }
    .address .addressinfo{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
    }
    .address .addressinfo .infowidth{
        width: 12%;
        display: flex;
    } 
    .address .addressinfo .infowidth input{
        width: 20px;
        flex: 1;
    }
    .address .addressinfo .road{
        width: 50%;
        display: flex;
    }
    .address .addressinfo .road input{
        flex: 1;
    }
</style>
