# System.IO.FileLoadException: Could not load file or assembly ...

If you have this error, try redirecting one assembly version to yours.

Example:
My application could not load the assembly **System.Web.Http, Version=4.0.0.0**.

In Web.config, add:
{code:xml}
<assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
      <dependentAssembly>
        <assemblyIdentity name="System.Web.Http" publicKeyToken="31bf3856ad364e35" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-5.2.3.0" newVersion="5.2.3.0" />
      </dependentAssembly>
    </assemblyBinding>

{code:xml}