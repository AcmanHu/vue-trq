<template>
    <div id="page6">
        <div class="page6">
            <div style="width: 90%;min-width: 1100px;margin: 0  auto;">
                <h4 style="text-align:center;margin-top:20px;">客户申请使用天然气的相关技术指标</h4>
                <table border="1px" style="border-collapse:collapse;width: 100%;">
                    <tr>
                    <th class="heard"colspan="2" >工程查勘概况及设计说明</th>
                    </tr>
                    <tr>
                        <td colspan="2"  style="border-bottom: none;">
                        <textarea  class="textarea1"></textarea>
                        
                        </td>
                        
                    </tr>
                    <tr style="border-top:white;border-left: white;border-right: white;">
                        <td>查勘时间：<input></td>
                        <td>查勘人员：<input></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="border-bottom:none;">
                            <p >现场未达到设计要求原因:</p>
                            <textarea class="textarea2"></textarea>
                        </td>
                    </tr>
                    <tr style="border:white;">
                        <td colspan="2">预计延时天数：<input></td>
                    </tr>
                    <tr style="border:white;">
                        <td >用户代表签名：<input></td>
                        <td >时间：<input></td>
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
    .page6{
        font-size: 16px;
    }
    .heard{
        height: 10%;
        font-weight: 400;
    }
    .textarea1{
                border:none;
                outline: none;
                overflow:hidden;
                height:300px;
                width: 99%;
                margin-top: 0px;
                resize: none;
                }
    .textarea2{
                border:none;
                outline: none;
                overflow:hidden;
                height:200px;
                width: 99%;
                resize: none;
                color: black;
                margin-top: 1px;
    }
    input{
            outline: none;
            border: none;
            
    }
</style>
