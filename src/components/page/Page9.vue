<template>
    <div id="page8">
        <div class="page8">
            <div class="wrap">
                <h4 style="text-align:center;margin-top:20px;">天然气工程设计变更单</h4>
                <table style="border-collapse:collapse;" width="100%" height="100%"  cellpadding="0" cellspacing="0">

                    <tr>
                        <td colspan="6" >
                            <label>变更原因：</label>
                            <textarea class="text" >&nbsp;</textarea>
                        </td>
                        <!--<td >&nbsp;</td>
                        <td >&nbsp;</td>
                        <td >&nbsp;</td>-->
                    </tr>
                    <tr>
                        <td colspan="6">
                            <label>变更内容:</label>
                            <textarea class="txt" >&nbsp;</textarea>
                        </td>
                    </tr>
                    <tr style="text-align: center; height:50px">
                        <td>设计部门</td>
                        <td>市场科</td>
                        <td>监理单位</td>
                        <td>工程科</td>
                        <td>施工单位</td>
                        <td>用户</td>
                    </tr>
                    <tr style="height:180px">
                        <td>
                            <label>意见：</label>
                            <textarea class="foot"></textarea>
                        <ul>
                            <li ><label style="vertical-align: top;">负责人：</label><textarea class="sign"></textarea></li>
                            <li><label>(盖章)</label><textarea class="sign"></textarea></li>
                            <li><label style="vertical-align: top;">日期：</label><textarea class="sign"></textarea></li>
                        </ul>
                        </td>
                        <td>
                            <label>意见：</label>
                            <textarea class="foot"></textarea>
                        <ul>
                            <li ><label style="vertical-align: top;">负责人：</label><textarea class="sign"></textarea></li>
                            <li><label>(盖章)</label><textarea class="sign"></textarea></li>
                            <li><label style="vertical-align: top;">日期：</label><textarea class="sign"></textarea></li>
                        </ul>
                        </td>
                        <td>
                            <label>意见：</label>
                            <textarea class="foot"></textarea>
                            <ul>
                            <li ><label style="vertical-align: top;">负责人：</label><textarea class="sign"></textarea></li>
                            <li><label>(盖章)</label><textarea class="sign"></textarea></li>
                            <li><label style="vertical-align: top;">日期：</label><textarea class="sign"></textarea></li>
                        </ul>
                        </td>
                        <td>
                            <label>意见：</label>
                            <textarea class="foot"></textarea>
                            <ul>
                            <li ><label style="vertical-align: top;">负责人：</label><textarea class="sign"></textarea></li>
                            <li><label>(盖章)</label><textarea class="sign"></textarea></li>
                            <li><label style="vertical-align: top;">日期：</label><textarea class="sign"></textarea></li>
                        </ul>
                        </td>
                        <td>
                            <label>意见：</label>
                            <textarea class="foot"></textarea>
                            <ul>
                            <li ><label style="vertical-align: top;">负责人：</label><textarea class="sign"></textarea></li>
                            <li><label>(盖章)</label><textarea class="sign"></textarea></li>
                            <li><label style="vertical-align: top;">日期：</label><textarea class="sign"></textarea></li>
                        </ul>
                        </td>
                        <td>
                            <label>意见：</label>
                            <textarea class="foot"></textarea>
                            <ul>
                            <li ><label style="vertical-align: top;">负责人：</label><textarea class="sign"></textarea></li>
                            <li><label>(盖章)</label><textarea class="sign"></textarea></li>
                            <li><label style="vertical-align: top;">日期：</label><textarea class="sign"></textarea></li>
                        </ul>
                        </td>
                    </tr>
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
    .page8{
        margin-bottom: 20px;
        font-size: 16px;
    }
    .wrap{
        width: 90%;
        min-width: 1100px;
        margin: 0 auto;
    }
    table,td{
        border: 1px solid black;
    }
    textarea {
        border: none;
        outline: none;
        resize:none;
        overflow:hidden;
        
    }
    .text{
        width: 99%;
        height: 100px;
        font-family: "微软雅黑";
    }
    .txt{
        width: 99%;
        height: 400px;
        font-family: "微软雅黑";
    }
    .foot{
        height: 140px;
        width:98%;
        font-family: "微软雅黑";
    }
    li{
        list-style-type:none;
        padding: 0px;
    }
    .sign{
        width:70px;
        height: 15px;
        font-family: '微软雅黑';
    }
</style>
