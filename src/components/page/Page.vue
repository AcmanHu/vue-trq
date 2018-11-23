<template>
    <div id="page">
        <div class="page">
            <h1>(超)高层建筑供气档案</h1>
            <div style="width: 90%; min-width:1100px;">
                <table style="width: 100%;" bgcolor="black">
                    <tr>
                        <td>&nbsp;高层类别</td>
                        <td  contentEditable="true"></td>
                        <td> &nbsp;建筑竣工时间</td>
                        <td  contentEditable="true"></td>
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
                    
                    <tr>
                        <td colspan="4">

                             <textarea  style="width:100%; border:none;" cols="211" rows="10">其他：</textarea>
                        </td>
                    </tr>
                     <tr>
                        <td colspan="4">

                <textarea style="width:100%" cols="211" rows="10">特殊用气场所或暗厨房情况（如有建档）：</textarea>
                        </td>
                    </tr>
                </table>
                <h1>(超)高层建筑供气档案</h1>
                <textarea style="width:100%" cols="211" rows="20"></textarea>
                <p>注：此页为超高层建筑专用档案，非高层不填写</p>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    h1{
            text-align: center;
        }
        td{
            width: 150px;
            height: 40px;
            margin: auto;
            background-color: white;
        }
        .MergeY{
            height: 80px;
        }
        textarea{
            padding: 9px;
        }
</style>
