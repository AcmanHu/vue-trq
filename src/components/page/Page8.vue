<template>
    <div id="page8">
        <div class="page8">
            <div style="width: 90%;min-width: 1100px;margin:0 auto;">
                    <h4 style="margin-top:20px;">天然气工程技术交底纪要</h4>
                <table border="1px" style="border-collapse:collapse;width: 100%;text-align: center;">
                    <tr>
                        <td colspan="2">交底时间</td>
                        <td colspan="2">
                            <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">工程主要内容</td>
                        <td colspan="2">完成情况</td>
                    </tr>
                    
                    <tr>
                        <td rowspan="6"style="width: 2%;">技术及安全交底记录</td>
                        <td>提供施工图<input style="width:12px;">套</td>
                        <td colspan="2"><input></td>
                    </tr>
                    <tr>
                        <td>提供水电临设施工场地</td>
                        <td colspan="2"><input></td>
                    </tr>
                    <tr>
                        <td>提供地下设施图及管线情况图</td>
                        <td colspan="2"><input></td>
                    </tr>
                    <tr>
                        <td>确定报警器厂家</td>
                        <td colspan="2"><input></td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <textarea ></textarea>
                            <div style="text-align:left;">
                                <span>施工内容：</span>
                                <Checkbox >安装</Checkbox>
                                <Checkbox >管沟开挖恢复</Checkbox>
                                <Checkbox >出渣</Checkbox>
                                <Checkbox >搭架</Checkbox>
                            </div>
                        
                        </td>
                        
                    </tr>
                    <tr>
                        <td colspan=" 3"><p style="text-align:left;">中压控制阀门（编号）：</p></td>
                    </tr>
                    
                    
                    <tr>
                        <td colspan="4">参与部门及人员的意见和签字</td>
                    </tr>
                    
                    <tr>
                        <td colspan="2"style="width: 33%;">部门</td>
                        <td>意见</td>
                        <td>签字</td>
                    </tr>
                    <tr>
                        <td colspan="2">市场科</td>
                        <td><input></td>
                        <td><input></td>
                    </tr>
                    <tr>
                        <td colspan="2">工程设计部门</td>
                        <td><input></td>
                        <td><input></td>
                    </tr>
                    <tr>
                        <td colspan="2">工程科</td>
                        <td><input></td>
                        <td><input></td>
                    </tr>
                    <tr>
                        <td colspan="2">施工单位</td>
                        <td><input></td>
                        <td><input></td>
                    </tr>
                    <tr>
                        <td colspan="2">监理单位</td>
                        <td><input></td>
                        <td><input></td>
                    </tr>
                    <tr>
                        <td colspan="2">生产运行科</td>
                        <td><input></td>
                        <td><input></td>
                    </tr>
                    <tr>
                        <td colspan="2">客户单位代表</td>
                        <td><input></td>
                        <td><input></td>
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
        font-size: 16px;
    }
   input{
        outline: none;
        border: none;
        width: 99%;
            
    }
    tr{
        height: 30px;
    }
    textarea{
        border:none;
        outline: none;
        overflow:hidden;
        height:300px;
        width: 100%;
        margin-top: 0px;
        resize: none;
        text-indent: 2em;
    }
    h4{
        text-align: center;
        
	}
</style>
