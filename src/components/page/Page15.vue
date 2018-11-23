<template>
    <div id="page15">
        <div class="page15">
            <div class="box_table">
                <h4>天然气工程通气通知单</h4>
                <div class="top_box">
                    <div class="content">
                        <p>管理站：</p>
                        <p class="indent">经审核，该工程已安装验收完成，以完清相关手续，请按规矩办理通气手续。</p>
                        <p class="indent">一、本天然气工程民
                            <input class="input1" type="text">
                            用户，用气价格
                            <input class="input1" type="text">元,请按规定与该工程客户签订供气合同并按照合同进行服务。</p>
                        <p class="indent">二、本燃气工程集体（学生食堂，部队战士食堂及其他）用气 <input class="input1" type="text">户，用气价格 <input class="input1" type="text">
                            元；商业用气 <input class="input1" type="text">户，用气价格 <input class="input1" type="text">
                            元；工业、CNG、分布式能源用气 <input class="input1" type="text">
                            户，用气价格 <input class="input1" type="text">
                            元；请按我公司与该工程客户签订的供气合同及安全附加协议进行服务。
                        </p>
                        <p class="indent">三、本工程于 <input class="input1" type="text">
                            交底，站上验收，式压合格后通气，并将灶具信息录入系统。
                        </p>
                        <p class="indent">四、预收气量 <input class="input1" type="text">
                            m³。金额 <input class="input1" type="text">元。
                        </p>
                        <p class="indent">五、客户编号：</p>
                        <textarea cols="110" class="textarea1"></textarea>
                        <p class="p0 p1">经营管理科</p>
                        <p class="p0 p2"><DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker></p>
                    </div>
                </div>
                <h4>客户信息</h4>
                <table class="table">
                    <tr>
                        <td style="width:10%">工程编号</td>
                        <td colspan="7"><input class="input2" type="text"></td>
                    </tr>
                    <tr>
                        <td>工程名称</td>
                        <td style="width:40%" colspan="2">
                            <input class="input2" type="text">
                        </td>
                        <td style="width:10%">工程地址</td>
                        <td colspan="4" style="width:40%">
                            <input class="input2" type="text">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8" style="text-align:left;height: 50px;">
                            <div class="div1">
                                <div class="div2">
                                    <span>拆除表型号：</span>
                                    <input type="text">
                                </div>
                                <div class="div3">
                                    <span>表号：</span>
                                    <input type="text">
                                </div>
                                <div class="div4">
                                    <span>底数：</span>
                                    <input type="text">
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8">
                            <Checkbox >特殊用气场所</Checkbox>
                            <Checkbox >（超）高层建筑用气</Checkbox>
                        </td>
                    </tr>
                </table>
                <p>注：经营管理科填写</p>
                <div style="text-align:right;margin:20px 0;">
                    <Button type="primary">保存</Button>
                </div> 
            </div>
        </div>       
    </div>
</template>

<script>
export default {
    data(){
        return{
            single:false
        }
    }
}
</script>

<style lang="scss" scoped>
    .page15{
        font-size: 16px;
    }
    .box_table{
        width: 90%;
        /* min-width: 1100px; */
        margin: 0 auto;
    }
    .table{
        border-collapse:collapse;
        width: 100%;
        text-align: center;
    }
    .table,td{
        border: 1px solid black;
    }
    .table,td{
        border: 1px solid black;
    }
    tr{
        height: 50px;
    }
    .indent{
        text-indent:2em;
        line-height: 40px;
    }
    .top_box{
        width: 100%;
        border: 1px solid black;
    }
    .top_box .content{
        padding: 20px 10px 40px 10px;
    }
    .top_box .content .p0{
        text-align: right;
        padding: 10px 20px;
    }
    input{
        background: none;
        border: none;
        outline: none;
    }
    .top_box .content .input1{
        width: 50px;
        text-align: center;
    }
    .top_box .content .textarea1{
        /* width: 100%; */
        height: 100px;
        margin-left: 2em;
        border: none;
        resize: none;
        outline: none;
    }
    h4{
        text-align: center;
        padding-top: 20px;
    }
    .table .div1{
        width: 100%;
        height: 50px;
        line-height: 50px;
        display: flex;
    }
    .table .div1 .div2{
        width: 40%;
        display: flex;
    }
    .table .div1 .div3{
        width: 30%;
        display: flex;
    }
    .table .div1 .div4{
        width: 30%;
        display: flex;
    }
    .table .div1 input{
        flex: 1;
    }
    .table .input2{
        height: 50px;
        width: 100%;
    }
</style>
