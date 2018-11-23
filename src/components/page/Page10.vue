<template>
    <div id="page10">
        <div class="page10">
            <div class = "wrap">
                    <h4 style="text-align:center;margin-top:20px;" class = "title"> 天然气工程质检验收单 （一）</h4>
                <table style = "width: 100%;">
                    <tr>
                        <td>验收时间</td>
                        <td colspan = "13">
                            <span class = "time"><DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker></span>
                        </td>
                    </tr>
                    <tr class = "measure">
                        <td>用气户数、性质及工程测量单
                        </td>
                        <td colspan = "13">
                            <ul>
                                <li>
                                    1、本次(新安装、拆迁、迁改、增客、用户管道预埋)民用气<input size = "5">户,集体用气<input size = "5" height:"50">户,
                                    学校、部队或福利机构<input size = "5">户、工业用气<input size = "5">户、CNG<input size = "5">座、其它<input size = "38">。
                                </li>
                                    2、设备及管道:(新增、拆除、迁建)调压箱<input size = "5">台,调压柜<input size = "5">台,短桩<input size = "5">根,阀井<input size = "5">座。
                                <li>
                                    3、施工单位:<input size = "45">	
                                </li>
                                <li>	
                                    &nbsp项目负责人:<input size = "44">
                                </li>
                                    中压埋地阀井:<br>
                                    厂家<input size = "7">,型号:<input size = "10">,编号:<input size = "16">
                                <li>
                                    户内计量表采用:<input size = "42">
                                </li>
                                <li>
                                    其它:<input size = "52">
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr class = "pressure">
                        <td colspan = "3" contentEditable="true">
                        </td>
                        <td colspan = "4" contentEditable="true"> 
                        </td>
                        <td colspan = "3" class = "pressure-test" >
                            试压是否合格
                        </td>
                        <td  colspan = "4" contentEditable="true">
                        </td>
                    </tr>
                    <tr class = "unit">
                        <td class = "unit-pressure" colspan = "4" >
                            埋地管道测量单位：
                        </td>
                        <td colspan = "2" contentEditable="true" >
                        </td>
                        <td colspan = "2">
                            测量人：
                        </td>
                        <td  colspan = "2" contentEditable="true" >				
                        </td>
                        <td colspan = "2">
                            测量时间：
                        </td>
                        <td colspan = "2" contentEditable="true">
                        </td>
                    </tr>
                    <tr class = "unit">
                        <td class = "unit-pressure" colspan = "4" >
                            阴极保护施工单位：
                        </td>
                        <td colspan = "2" contentEditable="true" >
                        </td>
                        <td colspan = "2">
                            施工人：
                        </td>
                        <td  colspan = "2" contentEditable="true" >				
                        </td>
                        <td colspan = "2">
                            安装时间：
                        </td>
                        <td colspan = "2" contentEditable="true">
                        </td>
                    </tr>
                    <tbody class = "safety-precautions">
                        <tr>
                            <td colspan = "2" rowspan = "8">安全措施</td>
                            <td colspan = "5">用气环境是否通风</td>
                            <td colspan = "7" contentEditable="true"></td>
                        </tr>
                        <tr >
                            <td colspan = "5">是否安装天然气报警切断阀</td>
                            <td colspan = "7" contentEditable="true"></td>
                        </tr>
                        <tr id="myborder" style="border-right:1px solid black;">
                            <td rowspan = "5">报警切断系统</td>
                            <td colspan="11"></td>
                        </tr>
                        <tr >
                            <td colspan = "4">电池阀生产厂家</td>
                            <td colspan = "7" contentEditable="true"></td>
                        </tr>
                        <tr >
                            <td colspan = "4">检查探头生产厂家</td>
                            <td colspan = "7" contentEditable="true"></td>
                        </tr>
                        <tr >
                            <td colspan = "4">生产资源是否具备</td>
                            <td colspan = "7" contentEditable="true"></td>
                        </tr>
                        <tr >
                            <td colspan = "4">首次检测报告是否具备</td>
                            <td colspan = "7" contentEditable="true"></td>
                        </tr>
                        <tr >
                            <td colspan = "5">是否安装天然气报警切断阀</td>
                            <td colspan = "7" contentEditable="true"></td>
                        </tr>
                        <tr rowspan = "3">
                            <td colspan = "2" rowspan = "2">置换</td>
                            <td colspan = "4">立管数目</td>
                            <td colspan = "4">置换情况</td>
                            <td colspan = "4">置换操作人签字</td>
                        </tr>
                        <tr >
                            <td colspan = "4" contentEditable="true"></td>
                            <td colspan = "4" contentEditable="true"></td>
                            <td colspan = "4" contentEditable="true"></td>
                        </tr>
                    </tbody>
                    
                        <tr class = "gasometer">
                            <td colspan = "2" rowspan = "15">气表及燃气具(含增容拆除等)</td>
                            <td colspan = "4" style="text-align:left;">气表型号</td>
                            <td colspan = "4">厂家</td>
                            <td colspan = "4">安装位置</td>
                        </tr>
                        <tr>
                            <td id = "tab" colspan = "2">设备:标号</td>
                            <td class = "facility" colspan = "10" contentEditable="true"></td>
                        </tr>
                        <tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        </tr>
                        <tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        </tr>
                        <tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        </tr>
                        <tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        </tr>
                        <tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        </tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        <tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        </tr>
                        <tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        </tr>
                        <tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        </tr>
                        <tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        </tr>
                        <tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        </tr>
                        <tr>
                            <td class = "facility" colspan = "12" contentEditable="true"></td>
                        </tr>
                        <tr class = "unit">
                            <td class = "unit-pressure" colspan = "2" >
                                    旧表表号：
                            </td>
                            <td colspan = "2" contentEditable="true" >
                            </td>
                            <td colspan = "2">
                                表型：
                            </td>
                            <td  colspan = "2" contentEditable="true" >				
                            </td>
                            <td colspan = "2">
                                止数：
                            </td>
                            <td colspan = "2" contentEditable="true">
                            </td>
                        </tr>
                    </tbody>
                </table>
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
    .page10{
        font-size: 16px;
        margin-bottom: 20px;
    }
    ul{
        list-style-type: none;
        text-align: left;
    }
    th,table,table td,ul,li{
        padding: 0;
        margin: 0;
    }
    tr{
        height: 30px;
    }
    table{
        table-layout: fixed;
        width: 100%;
        text-align: center;
        border-collapse: collapse;
        border-spacing: 0;
    }	
    table td{
        word-break: break-all;
        word-wrap: break-word;
        border: 1px solid #939598;
    }

    .wrap {
        width: 90%;
        min-width: 1100px;
        margin: 0px auto;
    }
    .wrap caption{
        font: 44px bold;	
    }
    
    .wrap input{
        margin: 10px auto;
    }
    .wrap .time{
        font:14px bold;
    }
    .wrap .measure td{
        height: 300px;
    }
    .wrap .measure input{
        text-align: center;
        font-weight:normal;
        background: none;
        border: none;
        border-bottom: 1px black solid;
        outline: none;
    }
    .wrap .measure ul{		
        padding:20px;
    }
    .wrap .pressure td{
        text-align: center;
        outline: none;
    }
    .wrap .pressure .pressure-test{
        border-right: transparent;
        text-align: left;
    }
    .wrap .pressure td + td + td + td{
        border-left: transparent;
    }
    .wrap .unit .unit-pressure{
        border-right: transparent;
        text-align: left;
    }
    .wrap .unit td + td{
        border-left: transparent;
        outline: none;
    }
    .wrap .unit td + td + td{
        border-right: transparent;
        outline: none;
    }
    .wrap .unit td + td + td + td + td + td{
        border-right: 1px #939598 solid;
        outline: none;
    }
    .wrap .unit td + td{
        border-right: transparent;
    }
    .wrap .safety-precautions td{
        outline: none;
    }
    .wrap .safety-precautions .gasometer td + td,td + td + td,{
        text-align: left;
    }
    .wrap .safety-precautions td + td{
        text-align: center;
    }
    .wrap .equipment td{
        border:transparent;
        outline: none;
        text-align: left;
    }
    .wrap .equipment .gasometer td{
        border:1px #939598 solid;
    }
    .wrap .facility{
        outline: none;
        border-left:transparent;
        border-bottom:transparent;
        border-top:transparent;
        text-align: left;
    }
    #tab{
        border:transparent;
    }
    #myborder{
        border-right:1px solid black; 
    }
</style>
