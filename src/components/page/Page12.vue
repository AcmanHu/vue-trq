<template>
    <div id="page12">
        <div class="page12">
            <div style="width: 90%; min-width:1100px;margin: 0 auto;">
            <h4 style="margin-top:20px;">(超)高层建筑供气档案</h4>
                <table style="width: 100%;border-collapse:collapse;" >
                    <tr>
                        <td>&nbsp;高层类别</td>
                        <td  contentEditable="true"></td>
                        <td> &nbsp;建筑竣工时间</td>
                        <td  >
                            <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;高层用气户数</td>
                        <td  contentEditable="true"></td>
                        <td>&nbsp;楼层数</td>
                        <td  contentEditable="true"></td>
                    </tr>
                    <tr class="MergeY">
                        <td>&nbsp;最高用气层数（含最高高度）</td>
                        <td contentEditable="true"></td>
                        <td>&nbsp;最高层建筑楼栋号</td>
                        <td  contentEditable="true"></td>
                    </tr>
                    <tr>
                        <td>&nbsp;建筑高度</td>
                        <td contentEditable="true"></td>
                        <td>&nbsp;调压器设定压力</td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr class="MergeX">
                        <td>&nbsp;安装分段调压位置：</td>
                        <td colspan="3" contentEditable="true"></td>
                    </tr>

                    <tr>
                        <td>&nbsp;管道引入方式：</td>
                        <td contentEditable="true"></td>
                        <td>&nbsp;快速切断阀位置：</td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr>
                        <td>&nbsp;气表安装方式：</td>
                        <td contentEditable="true"></td>
                        <td>&nbsp;立管材质及安装方式：</td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr>
                        <td>&nbsp;附属安全设施：</td>
                        <td contentEditable="true"></td>
                        <td>&nbsp;客户用气设备：</td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr class="Tr1">
                        <td class="Td1" colspan="4" >
                            <p class="Bottom_P">其他：</p>
                            <textarea  rows="12"></textarea></td>
                    </tr>
                    <tr class="Tr1">

                        <td class="Td1" colspan="4" >
                            <p class="Bottom_P">特殊用气场所或暗厨房情况（如有建档）：</p>
                            <textarea  rows="13"></textarea>
                        </td>
                    </tr>


                </table>
                <h2>(超)高层建筑供气档案</h2>
                <table style="width: 100%;border-collapse:collapse;" >
                    <tr class="Tr1">
                        <td class="Td1">
                            <textarea  rows="20"></textarea>
                        </td>
                    </tr>
                </table>

                <p>注：此页为超高层建筑专用档案，非高层不填写</p>
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
    .page12{font-size: 16px}
   h4{
        text-align: center;
    }
    table,td{
        border: 1px solid black;
    }
    td{
        width: 150px;
        height: 40px;
        margin: auto;
        background-color: white;
        outline: none;
    }
    .MergeY{
        height: 80px;
    }
    textarea{
        border: 0;
        width: 100%;
        resize: none;
        outline: none;
        text-indent: 2em;
    }
    .Bottom_P{
        padding: 9px;
    }
    .Tr1 .Td1{
        height: 200px;
    }
</style>
